import * as React from "react";
import BooleanQuestion from "../../components/BooleanQuestion/BooleanQuestion";

interface Props {

}

interface State {
    data: {
        answer: boolean;
        title: string;
        description: string;
    }[],
    step: number;
}

class App extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            step: 1,
            data: [
                {
                    answer: null,
                    title: "Is it true or false statement?",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam leo arcu, tempus sit amet risus
                    sagittis, sodales volutpat purus. Suspendisse mattis facilisis nulla a placerat. Fusce non erat nunc.
                    Aliquam erat volutpat. Morbi gravida, velit non mollis pellentesque, tortor risus consequat sapien,
                    id pretium ligula elit sed tortor.`
                }
            ]
        };
    }

    private handleAnswer = (value: boolean) => {
        this.setState({
            data: [
                ...this.state.data,
                this.state.data[this.state.step] = { ...this.state.data[this.state.step], answer: value }
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
