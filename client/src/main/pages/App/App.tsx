import * as React from "react";
import { Data, Answer } from "../../interfaces";
import BooleanQuestion from "../../components/BooleanQuestion/BooleanQuestion";
import SelectQuestion from "../../components/SelectQuestion/SelectQuestion";
import Navigation from "../../components/Navigation/Navigation";
import NavigationMobile from "../../components/NavigationMobile/NavigationMobile";
import Summary from "../../components/Summary/Summary";
import { Swipeable } from "react-swipeable";
import classNames from "classnames";

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

    private component() {
        switch (this.state.data[this.state.step - 1].type) {
            case "select":
                return <SelectQuestion  data={this.state.data[this.state.step - 1]} handleAnswer={this.handleAnswer} />;
            case "boolean":
                return <BooleanQuestion data={this.state.data[this.state.step - 1]} handleAnswer={this.handleAnswer} />;
            default:
                return <Summary data={this.state.data.slice(0, this.state.data.length - 1)} />;
        }
    }

    private handleSwipe = (e) => {
        if (e.dir === "Left" && this.state.data[this.state.step]) {
            this.setState({ step: this.state.step + 1 });
        } else if (e.dir === "Right" && this.state.step - 1 > 0) {
            this.setState({ step: this.state.step - 1 });
        }
    }

    render() {
        return (
            <Swipeable
                onSwiped={this.handleSwipe}
                className={classNames({
                    "question": this.state.step !== this.state.data.length,
                    "summary": this.state.step === this.state.data.length
                })}>
                <Navigation totalSteps= {this.props.data.length} activeStep={this.state.step} setStep={this.setStep} />
                <NavigationMobile totalSteps= {this.props.data.length} activeStep={this.state.step} setStep={this.setStep} />
                {this.component()}
            </Swipeable>
        );
    }
}

export default App;
