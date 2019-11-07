import * as React from "react";
import BooleanQuestion from "../../components/BooleanQuestion/BooleanQuestion";

interface Props {
    state: any;
}

interface State {
    data: {
        title: string;
        description: string;
        answer: boolean;
    }[],
    step: number;
}

class App extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            step: 1,
            data: this.props.state.map((question) => ({
                type: question.type,
                title: question.title,
                description: question.description,
                correctAnswer: question.correctAnswer,
                answer: null,
            }))
        };
    }

    private handleAnswer = (value: boolean) => {
        this.setState({
            step: this.state.step + 1,
            data: [
                ...this.state.data,
                this.state.data[this.state.step - 1] = { ...this.state.data[this.state.step - 1], answer: value }
            ]
        });
    }

    render() {
        return (
            <BooleanQuestion data={this.state.data[this.state.step - 1]} handleAnswer={this.handleAnswer} />
        );
    }
}

export default App;
