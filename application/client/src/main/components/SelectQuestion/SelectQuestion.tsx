import * as React from "react";
import { Data } from "../../interfaces";

interface Props {
    data: Data;
    handleAnswer(value: number);
}

class SelectQuestion extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="question">
                <p className="question-title">{this.props.data.title}</p>
                <div className="question-description">
                    {this.props.data.description}
                </div>
                {this.props.data.answer === "" ? 
                    <form className="radio-group">
                        {this.props.data.options.map((option) => (
                            <div key={option.id} className="question-radio">
                                <label htmlFor={String(option.id)}>{option.label}</label>
                                <input
                                    type="radio"
                                    id={String(option.id)}
                                    value={option.id}
                                    checked={this.props.data.answer === option.id}
                                    onClick={() => this.props.handleAnswer(option.id)}
                                />
                            </div>
                        ))}
                    </form>
                    :
                    <div className="answer">
                        Your answer: {this.props.data.answer}
                        Correct answer: {this.props.data.correctAnswer}
                    </div>
                }
            </div>
        );
    }
}

export default SelectQuestion;
