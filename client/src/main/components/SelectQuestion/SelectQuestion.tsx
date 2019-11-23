import * as React from "react";
import { Data, Answer } from "../../interfaces";

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
                    <form className="radio-group">
                        {this.props.data.options.map((option) => (
                            <div key={option.value} className="question-radio">
                                <label htmlFor={String(option.value)}>{option.label}</label>
                                <input
                                    type="radio"
                                    id={String(option.value)}
                                    value={option.value}
                                    checked={this.props.data.answer.value === option.value}
                                    onChange={() => this.props.handleAnswer(option)}
                                />
                            </div>
                        ))}
                    </form>
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

export default SelectQuestion;
