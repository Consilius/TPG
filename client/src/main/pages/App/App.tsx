import * as React from "react";
import { Data, Answer } from "../../interfaces";
import BooleanQuestion from "../../components/BooleanQuestion/BooleanQuestion";
import SelectQuestion from "../../components/SelectQuestion/SelectQuestion";
import Navigation from "../../components/Navigation/Navigation";
import NavigationMobile from "../../components/NavigationMobile/NavigationMobile";
import Summary from "../../components/Summary/Summary";
import SwipeableViews from "react-swipeable-views";
import Welcome from "../../components/Welcome/Welcome";

interface Props {
    data: Partial<Data[]>;
}

interface State {
    data: Data[];
    step: number;
    opacity: number;
    opacityNext: number;
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            step: 0,
            data: this.props.data.map((question) => {
                const result: Data = {
                    id: question.id,
                    type: question.type,
                    title: question.title,
                    description: question.description,
                    correctAnswer: question.correctAnswer,
                    answer: { label: "", value: null }
                }
                if (question.options) {
                    result.options = question.options;
                    result.showControls = false;
                }

                return result;
            }),
            opacity: 1,
            opacityNext: 0
        };
    }

    private setStep = (step: number) => {
        if (step <= this.state.data.length + 1 && step > 0) {
            this.setState({ step });
        }
    }

    private handleAnswer = (value: Answer) => {
        this.setState({
            data: this.state.data.map((datum, i) => {
                if (i === this.state.step - 1 && this.state.step) {
                    return { ...datum, answer: value };
                } else {
                    return datum;
                }
            })
        }, () => {
            this.setState({ data: this.state.data.map((datum, index) => {
                if (index === this.state.step - 1){
                    return {
                        ...datum,
                        showControls: true
                    }
                } else {
                    return datum;
                }
            }) })
            // @ts-ignore
            // firebase.database().ref(`/questionnaire/${window.userId}`).set(this.state.data.slice(0, this.state.data.length - 1));
        });
    }

    private renderQuestions() {
        const result = [];

        {this.state.data.map((question, index) => {
            if (question.type === "select") {
                result.push(
                    <div key={question.id} className="question" style={{ opacity: this.calculateOpacity(index) }}>
                        <SelectQuestion datum={question} handleAnswer={this.handleAnswer} />
                        {
                            <>
                                {this.state.step > 1 &&
                                    <div className="arrow-left" onClick={() => this.setStep(this.state.step - 1)}><img src="icon-left.png"></img></div>
                                }
                                {this.state.data[this.state.step - 1] && this.state.data[this.state.step - 1].showControls && this.state.step !== this.props.data.length + 1 &&
                                    <div className="arrow-right" onClick={() => this.setStep(this.state.step + 1)}><img src="icon-right.png"></img></div>
                                }
                            </>
                        }
                    </div>
                );
            } else if (question.type === "boolean") {
                result.push(
                    <div key={question.id} className="question" style={{ opacity: this.calculateOpacity(index) }}>
                        <BooleanQuestion datum={question} handleAnswer={this.handleAnswer} />
                            <>
                                {this.state.step > 1 &&
                                    <div className="arrow-left" onClick={() => this.setStep(this.state.step - 1)}><img src="icon-left.png"></img></div>
                                }
                                {this.state.data[this.state.step - 1] && this.state.data[this.state.step - 1].showControls && this.state.step !== this.props.data.length + 1 &&
                                    <div className="arrow-right" onClick={() => this.setStep(this.state.step + 1)}><img src="icon-right.png"></img></div>
                                }
                            </>
                    </div>
                );
            }
        })}

        return result;
    }

    private calculateOpacity = (index) => {
        if (index === this.state.step - 1) {
            return this.state.opacity;
        } else {
            return this.state.opacityNext;
        }
    }

    private onSwitching = (position, type) => {
        let result;
        let relativeValue = this.state.step + 1 - position;

        if (position >= this.state.step) {
            result = {
                direction: "left",
                opacity: relativeValue,
                opacityNext: 1 - relativeValue
            }
        } else {
            result = {
                direction: "right",
                opacity: 2 - relativeValue,
                opacityNext: relativeValue - 1
            }
        }

        if (type === "end") {
            result = {
                direction: "none",
                opacity: 1,
                opacityNext: 0
            }
        }

        this.setState(result);
    }

    private onChangeIndex = (index) => {
        if (index) {
            this.setState({ step: index });
        }
    }

    private calculateResult = () => {
        let counter = 0;
        this.state.data.forEach((datum) => {
            if (datum.answer && datum.correctAnswer.value === datum.answer.value) {
                counter++;
            }
        })

        return counter;
    }

    render() {
        return (
            <>
                <Navigation totalSteps= {this.props.data.length + 1 } activeStep={this.state.step} setStep={this.setStep} />
                <NavigationMobile
                    totalSteps= {this.props.data.length + 1 }
                    activeStep={this.state.step}
                    setStep={this.setStep}
                />
                <SwipeableViews
                    className="swipe-container"
                    slideStyle={{ height: "100%" }}
                    index={this.state.step}
                    onChangeIndex={this.onChangeIndex}
                    onSwitching={this.onSwitching}
                >
                    <Welcome setStep={this.setStep} />
                    {this.renderQuestions()} 
                    <Summary result={this.calculateResult()} />
                </SwipeableViews>
            </>
        );
    }
}

export default App;
