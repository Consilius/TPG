import * as React from "react";
import { Data, Answer } from "../../interfaces";
import classNames from "classnames";

interface Props {
    datum: Data;
    handleAnswer(value: Answer);
}

class SelectQuestion extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    private css = (option) => {
        let css = "";
        if (this.props.datum.answer.value !== null) {
            if (this.props.datum.answer.value === option.value) {
                css += " selected";
            }
    
            if (option.value === this.props.datum.correctAnswer.value) {
                css += " btn-correct";
            } else if (option.value !== this.props.datum.correctAnswer.value && this.props.datum.answer.value === option.value) {
                css += " btn-incorrect";
            } else {
                css += " gray";
            }
        }

        return css;
    }

    private handleAnswer = (option) => {
        if (this.props.datum.answer.value === null) {
            this.props.handleAnswer(option)
        }
    }

    render() {
        return (
            <>
                <div className="question-description">
                    {this.props.datum.description}
                </div>
                <div className="radio-group">
                    {this.props.datum.options.map((option) => (
                        <React.Fragment key={option.value}>
                            <button
                                className={classNames("question-radio", this.css(option) )}
                                onClick={() => this.handleAnswer(option)}
                            >
                                {option.label}
                            </button>
                            <div
                                className={classNames("question-radio-mobile", this.css(option) )}
                                onClick={() => this.handleAnswer(option)}
                            >
                                <div className="question-radio-circle">
                                    <div className="outer-circle">
                                        <div className="inner-circle"></div>
                                    </div>
                                    {this.props.datum.answer.value !== null && this.props.datum.correctAnswer.value === option.value &&
                                        <div className="icon-mark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px">
                                                <g fill="none" stroke="#83c41a" strokeWidth="2">
                                                    <circle cx="10" cy="10" r="8" style={{ strokeDasharray: "240px, 240px", strokeDashoffset: "480px" }}></circle>
                                                    <path d="M6,9 l4,4 l10-10" style={{ strokeDasharray: "50px, 50px", strokeDashoffset: "0px" }}></path>
                                                </g>
                                            </svg>
                                        </div>
                                    }
                                    {this.props.datum.answer.value !== null && this.props.datum.answer.value === option.value && this.props.datum.answer.value !== this.props.datum.correctAnswer.value &&
                                        <div className="icon-mark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px">
                                                <g fill="none" stroke="#f44536" strokeWidth="2">
                                                    <circle cx="10" cy="10" r="8" style={{ strokeDasharray: "240px, 240px", strokeDashoffset: "480px" }}></circle>
                                                    <path d="M6,6 l8,8" style={{ strokeDasharray: "50px, 50px", strokeDashoffset: "0px" }}></path>
                                                    <path d="M14,6 l-8,8" style={{ strokeDasharray: "50px, 50px", strokeDashoffset: "0px" }}></path>
                                                </g>
                                            </svg>
                                        </div>
                                    }
                                </div>
                                <span>{option.label}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </>
        );
    }
}

export default SelectQuestion;
