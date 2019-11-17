import * as React from "react";
import { Data } from "../../interfaces";
import BooleanQuestion from "../../components/BooleanQuestion/BooleanQuestion";
import SelectQuestion from "../../components/SelectQuestion/SelectQuestion";
import Navigation from "../../components/Navigation/Navigation";
import { Swipeable } from "react-swipeable";

interface Props {
    data: any;
}

interface State {
    data: Data[];
    step: number;
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            step: 1,
            data: this.props.data.map((question) => ({
                type: question.type,
                title: question.title,
                description: question.description,
                correctAnswer: question.correctAnswer,
                options: question.options,
                answer: ""
            }))
        };
    }

    // shouldComponentUpdate(_, nextState) {
    //     if (this.state.step !== nextState.step) {
    //         return true;
    //     }
    //     return false;
    // }

    private setStep = (step: number) => {
        this.setState({ step });
    }

    private handleAnswer = (value: boolean | number) => {
        this.setState({
            data: [
                ...this.state.data,
                this.state.data[this.state.step - 1] = { ...this.state.data[this.state.step - 1], answer: value }
            ]
        });
    }

    private component() {
        switch(this.state.data[this.state.step - 1].type) {
            case "select":
                return <SelectQuestion  data={this.state.data[this.state.step - 1]} handleAnswer={this.handleAnswer} />
            default:
                return <BooleanQuestion data={this.state.data[this.state.step - 1]} handleAnswer={this.handleAnswer} />
        }
    }

    private handleSwipe = (e) => {
        console.log(e.dir)
        if ((e.dir === "Up" || e.dir === "Left") && this.state.data[this.state.step + 1]) {
            this.setState({ step: this.state.step + 1 })
        } else if ((e.dir === "Down" || e.dir === "Right") && this.state.step - 1 > 0) {
            this.setState({ step: this.state.step - 1 })
        }
    }

    render() {
        return (
            <div className="app">
                <Navigation totalSteps= {this.props.data.length} activeStep={this.state.step} setStep={this.setStep} />
                <Swipeable onSwiped={this.handleSwipe}>
                    {this.component()}
                </Swipeable>
            </div>
        );
    }
}

export default App;
