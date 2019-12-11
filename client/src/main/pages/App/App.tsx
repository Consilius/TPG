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
}

class App extends React.Component<Props, State> {
    // private userId: string;

    constructor(props: Props) {
        super(props);
        // @ts-ignore
        // if (typeof firebase !== "undefined") {
        //     // @ts-ignore
        //     console.log(firebase.auth().currentUser)
        //     // @ts-ignore
        //     this.userId = firebase.auth().currentUser.uid;
        // }

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
            })
        };
    }

    private setStep = (step: number) => {
        this.setState({ step });
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
        {this.state.data.map((question) => {
            if (question.type === "select") {
                result.push(<SelectQuestion key={question.id} data={question} handleAnswer={this.handleAnswer} />);
            } else if (question.type === "boolean") {
                result.push(<BooleanQuestion key={question.id} data={question} handleAnswer={this.handleAnswer} />);
            } else {
                result.push(<Summary key="summary" data={this.state.data.slice(0, this.state.data.length - 1)} />);
            }
        })}
        return result;
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
                    style={{ height: "80%" }}
                    slideStyle={{ height: "100%" }}
                    index={this.state.step - 1}
                    onChangeIndex={this.onChangeIndex}
                >
                    {this.renderComponents()} 
                </SwipeableViews>
            </>
        );
    }
}

export default App;
