import * as React from "react";
import { Data, Answer } from "../../interfaces";
import BooleanQuestion from "../../components/BooleanQuestion/BooleanQuestion";
import SelectQuestion from "../../components/SelectQuestion/SelectQuestion";
import Navigation from "../../components/Navigation/Navigation";
import NavigationMobile from "../../components/NavigationMobile/NavigationMobile";
import Summary from "../../components/Summary/Summary";
import SwipeableViews from "react-swipeable-views";

interface Props {
    data: Partial<Data[]>;
}

interface State {
    data: Data[];
    step: number;
    opacity: number;
    opacityNext: number
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            step: 1,
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
                }

                return result;
            }),
            opacity: 1,
            opacityNext: 0
        };
    }

    private setStep = (step: number) => {
        if (step <= this.state.data.length && step > 0) {
            this.setState({ step });
        }
    }

    private handleAnswer = (value: Answer) => {
        this.setState({
            data: this.state.data.map((datum, i) => {
                if (i === this.state.step - 1 ) {
                    return { ...datum, answer: value };
                } else {
                    return datum;
                }
            })
        }, () => {
            console.log(this.state.data)
            // @ts-ignore
            firebase.database().ref(`/questionnaire/${window.userId}`).set(this.state.data.slice(0, this.state.data.length - 1));
        });
    }

    private renderComponents() {
        const result = [];

        {this.state.data.map((question, index) => {
            if (question.type === "select") {
                result.push(
                    <div key={question.id} className="question" style={{ opacity: this.calculateOpacity(index) }}>
                        <SelectQuestion datum={question} handleAnswer={this.handleAnswer} />
                    </div>
                );
            } else if (question.type === "boolean") {
                result.push(
                    <div key={question.id} className="question" style={{ opacity: this.calculateOpacity(index) }}>
                        <BooleanQuestion datum={question} handleAnswer={this.handleAnswer} />
                    </div>
                );
            } else {
                result.push(
                    <div key="summary" className="summary" style={{ opacity: this.calculateOpacity(index) }}>
                        <Summary data={this.state.data.slice(0, this.state.data.length - 1)} />
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

    private onSwitching = (index, type) => {
        let result;
        let relativeValue = this.state.step - index;

        if (index >= this.state.step - 1) {
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
        this.setState({ step: index + 1 });
    }

    render() {
        return (
            <>
                <Navigation totalSteps= {this.props.data.length} activeStep={this.state.step} setStep={this.setStep} />
                <NavigationMobile totalSteps= {this.props.data.length} activeStep={this.state.step} setStep={this.setStep} />
                <SwipeableViews
                    className="swipe-container"
                    // style={{ height: "80%" }}
                    slideStyle={{ height: "100%" }}
                    index={this.state.step - 1}
                    onChangeIndex={this.onChangeIndex}
                    onSwitching={this.onSwitching}
                >
                    {this.renderComponents()} 
                </SwipeableViews>
            </>
        );
    }
}

export default App;
