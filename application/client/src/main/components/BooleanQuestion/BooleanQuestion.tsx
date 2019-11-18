import * as React from "react";
import { DataBoolean } from "../../interfaces";

interface Props {
    data: DataBoolean;
    handleAnswer(value: boolean);
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
                {this.props.data.answer === "" ?
                    <div className="btn-group">
                        <button className="btn bcg-green" onClick={() => this.props.handleAnswer(true)} >True</button>
                        <button className="btn bcg-red" onClick={() => this.props.handleAnswer(false)}>False</button>
                    </div>
                    :
                    <div className="answer">
                        <p>
                            Your answer: {this.props.data.answer.toString()}
                        </p>
                        <p>
                            Correct answer: {this.props.data.correctAnswer}
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
