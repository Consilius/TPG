import * as React from "react";
import { DataBoolean, Answer } from "../../interfaces";
import classNames from "classnames";

interface Props {
    datum: DataBoolean;
    handleAnswer(value: Answer);
}

class BooleanQuestion extends React.PureComponent<Props> {
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
                <div className="btn-group">
                    <button className={classNames("btn", this.css({ label: "Áno", value: 0 }) )} onClick={() => this.handleAnswer({ label: "Áno", value: 0 })} >Áno</button>
                    <button className={classNames("btn", this.css({ label: "Nie", value: 1 }) )} onClick={() => this.handleAnswer({ label: "Nie", value: 1 })}>Nie</button>
                </div>
            </>
        );
    }
}

export default BooleanQuestion;
