import * as React from "react";
import { Data, Answer } from "../../interfaces";
import AnswerQuestion from "../AnswerQuestion/AnswerQuestion";

interface Props {
    data: Data;
    handleAnswer(value: Answer);
}

class SelectQuestion extends React.PureComponent<Props> {
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
                    <div className="radio-group">
                        {this.props.data.options.map((option) => (
                            <button
                                key={option.value}
                                className="question-radio"
                                onClick={() => this.props.handleAnswer(option)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                    :
                    <AnswerQuestion
                        answer={this.props.data.answer.label}
                        correctAnswer={this.props.data.correctAnswer.label}
                        source={"source"}
                    />
                }
            </>
        );
    }
}

export default SelectQuestion;
