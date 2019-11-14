import * as React from "react";
import { Data } from "../../interfaces";
import BooleanQuestion from "../../components/BooleanQuestion/BooleanQuestion";
import SelectQuestion from "../../components/SelectQuestion/SelectQuestion";

interface Props {
    state: any;
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
            data: this.props.state.map((question) => ({
                type: question.type,
                title: question.title,
                description: question.description,
                correctAnswer: question.correctAnswer,
                answer: "",
                options: question.options
            }))
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.step !== nextState.step) {
            return true;
        }
        return false;
    }

    private handleAnswer = (value: boolean | number) => {
        this.setState({
            data: [
                ...this.state.data,
                this.state.data[this.state.step - 1] = { ...this.state.data[this.state.step - 1], answer: value }
            ]
        });
        setTimeout(() => {
            this.setState({ step: this.state.step + 1 })
        }, 600)
    }

    private component() {
        switch(this.state.data[this.state.step -1].type) {
            case "select":
                return <SelectQuestion  data={this.state.data[this.state.step - 1]} handleAnswer={this.handleAnswer} />
            default:
                return <BooleanQuestion data={this.state.data[this.state.step - 1]} handleAnswer={this.handleAnswer} />
        }
    }

    render() {
        return (this.component());
    }
}

export default App;
