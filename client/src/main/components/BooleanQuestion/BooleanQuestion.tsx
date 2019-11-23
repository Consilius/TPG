import * as React from "react";
import { DataBoolean, Answer } from "../../interfaces";

interface Props {
    data: DataBoolean;
    handleAnswer(value: Answer);
}

class BooleanQuestion extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <p className="question-title">{this.props.data.title}</p>
                <div className="question-description">
                    {this.props.data.description}
                </div>
                {this.props.data.answer.value === null ?
                    <div className="btn-group">
                        <button className="btn bcg-green" onClick={() => this.props.handleAnswer({ label: "Yes", value: 1 })} >Yes</button>
                        <button className="btn bcg-red" onClick={() => this.props.handleAnswer({ label: "No", value: 0 })}>No</button>
                    </div>
                    :
                    <div className="answer">
                        <p>
                            Your answer: {this.props.data.answer.label}
                        </p>
                        <p>
                            Correct answer: {this.props.data.correctAnswer.label}
                        </p>
                        <p>
                            <a href="">source</a>
                        </p>
                    </div>
                }
            </>
        );
    }
}

export default BooleanQuestion;