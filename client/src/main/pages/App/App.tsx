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
    disableSwipe: boolean;
    lastUnansweredStep: number;
}

class App extends React.Component<Props, State> {
    private version: number;

    constructor(props: Props) {
        super(props);

        this.version = 1;
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
            disableSwipe: false,
            lastUnansweredStep: 1
        };
    }

    private setStep = (step: number) => {
        if (step > this.state.step && step <= this.state.data.length + 1) {
            if (this.state.step === 0 && step === 1) {
                return this.setState({ step: 1 });
            }
            if (this.state.data[step - 2].answer && this.state.data[step - 2].answer.value !== null) {
                return this.setState({ step });
            }
        } else if (step < this.state.step && step > 0) {
            return this.setState({ step });
        } else {
            return;
        }
    }

    private storeData = () => {
        return { ...this.state.data.map((datum) => {
            return {
                id: datum.id,
                correctAnswer: datum.correctAnswer,
                answer: datum.answer
            }
        })}
    }

    private handleAnswer = (value: Answer) => {
        this.setState({
            data: this.state.data.map((datum, i) => {
                if (i === this.state.step - 1 && this.state.step) {
                    return { ...datum, answer: value };
                } else {
                    return datum;
                }
            }),
            lastUnansweredStep: this.state.step + 1
        }, () => {
            window.setTimeout(() => {
                this.setStep(this.state.step + 1);
                this.setState({ data: this.state.data.map((datum, index) => {
                    if (index === this.state.step - 2){
                        return {
                            ...datum,
                            showControls: true
                        }
                    } else {
                        return datum;
                    }
                }) })
            }, 1200)
            // @ts-ignore
            firebase.database().ref(`/questionnaire${this.version}/${window.userId}`).set(this.storeData());
        });
    }

    private renderQuestions() {
        const result = [];

        {this.state.data.map((question, index) => {
            if (question.type === "select") {
                result.push(
                    <div key={question.id} className="question">
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
                    <div key={question.id} className="question">
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

    private calculateResult = () => {
        let counter = 0;
        this.state.data.forEach((datum) => {
            if (datum.answer && datum.correctAnswer.value === datum.answer.value) {
                counter++;
            }
        })

        return counter;
    }

    private onChangeIndex = (nextIndex) => {
        const oldIndex = this.state.step;
        this.setState({ step: nextIndex }, () => {
            if (nextIndex > oldIndex && !this.allowNextStep()) {
                this.setState({ step: oldIndex });
            }
            if (nextIndex < 1) {
                this.setState({ step: 1 })
            }
        });
    }

    private allowNextStep = () => {
        const offset = -2 // -1 for array indexing, -1 for pre-setting next step
        if (this.state.step === 1) {
            return true;
        } else if (this.state.data[this.state.step + offset].answer && this.state.data[this.state.step + offset].answer.value !== null) {
            return true;
        } else {
            return false;
        }
    }

    private disableStep = (step: number) => {
        if (step === this.state.step) {
            return false;
        }
        if (this.state.lastUnansweredStep === step || this.state.lastUnansweredStep === this.state.data.length + 1) {
            return false;
        }
        if (step <= this.state.data.length) {
            return !(this.state.data[step - 1].answer && this.state.data[step - 1].answer.value !== null);
        }

        return true;
    }

    render() {
        return (
            <>
                <Navigation
                    totalSteps= {this.props.data.length + 1 }
                    activeStep={this.state.step}
                    setStep={this.setStep}
                    disableStep={this.disableStep}
                />
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
