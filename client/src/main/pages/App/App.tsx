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
    constructor(props: Props) {
        super(props);
        this.state = {
            step: 1,
            data: this.props.data.map((question) => ({
                id: question.id,
                type: question.type,
                title: question.title,
                description: question.description,
                correctAnswer: question.correctAnswer,
                options: question.options,
                answer: { label: "", value: null }
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

    private handleAnswer = (value: Answer) => {
        this.setState({
            data: this.state.data.map((datum, i) => {
                if (i === this.state.step - 1 ) {
                    return { ...datum, answer: value }
                } else {
                    return datum;
                }
            })
        });
    }

    private component() {
        switch(this.state.data[this.state.step - 1].type) {
            case "select":
                return <SelectQuestion  data={this.state.data[this.state.step - 1]} handleAnswer={this.handleAnswer} />
            case "boolean":
                return <BooleanQuestion data={this.state.data[this.state.step - 1]} handleAnswer={this.handleAnswer} />
            default:
                return <Summary data={this.state.data.slice(0, this.state.data.length - 1)} />
        }
    }

    private handleSwipe = (e) => {
        if ((e.dir === "Up" || e.dir === "Left") && this.state.data[this.state.step]) {
            this.setState({ step: this.state.step + 1 })
        } else if ((e.dir === "Down" || e.dir === "Right") && this.state.step - 1 > 0) {
            this.setState({ step: this.state.step - 1 })
        }
    }

    render() {
        return (
            <Swipeable
                onSwiped={this.handleSwipe}
                className={classNames({
                    "question": this.state.step !== this.state.data.length,
                    "summary": this.state.step == this.state.data.length
                })}>
                <Navigation totalSteps= {this.props.data.length} activeStep={this.state.step} setStep={this.setStep} />
                <NavigationMobile totalSteps= {this.props.data.length} activeStep={this.state.step} setStep={this.setStep} />
                {this.component()}
            </Swipeable>
        );
    }
}

export default App;
