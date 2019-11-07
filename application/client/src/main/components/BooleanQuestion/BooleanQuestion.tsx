import * as React from "react";

interface Props {
    data: any;
    handleAnswer(value: boolean);
}

class BooleanQuestion extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="question">
                <p className="question-title">{this.props.data.title}</p>
                <div>
                    {this.props.data.description}
                </div>
                <div className="btn-group">
                    <button className="btn bcg-green" onClick={() => this.props.handleAnswer(true)} >True</button>
                    <button className="btn bcg-red" onClick={() => this.props.handleAnswer(false)}>False</button>
                </div>
            </div>
        );
    }
}

export default BooleanQuestion;
