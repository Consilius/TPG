import * as React from "react";
import { Data } from "../../interfaces";

interface Props {
    data: Data;
    handleAnswer(value: number);
}

interface State {
    animateTitleOut: boolean;
    animateDescriptionOut: boolean;
    animateButtonsOut: boolean;
    animateTitleIn: boolean;
    animateDescriptionIn: boolean;
    animateButtonsIn: boolean;
}

class SelectQuestion extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            animateTitleOut: false,
            animateDescriptionOut: false,
            animateButtonsOut: false,
            animateTitleIn: false,
            animateDescriptionIn: false,
            animateButtonsIn: false
        }
    }

    handleAnswer = (value: number) => {
        this.setState({ animateTitleOut: true });
        setTimeout(() => {
            this.setState({ animateDescriptionOut: true });
        }, 200);
        setTimeout(() => {
            this.setState({ animateButtonsOut: true });
        }, 400);
        this.props.handleAnswer(value);
    }

    titleClassName = (defaultClass: string) => {
        return this.state.animateTitleOut ? `animate ${defaultClass}` : defaultClass;
    }

    descriptionClassName = (defaultClass: string) => {
        return this.state.animateDescriptionOut ? `animate ${defaultClass}` : defaultClass;
    }

    buttonsClassName = (defaultClass: string) => {
        return this.state.animateButtonsOut ? `animate ${defaultClass}` : defaultClass;
    }

    render() {
        return (
            <div className="question">
                <p className={this.titleClassName("question-title")}>{this.props.data.title}</p>
                <div className={this.descriptionClassName("question-description")}>
                    {this.props.data.description}
                </div>
                <form className={this.buttonsClassName("radio-group")}>
                    {this.props.data.options.map((option) => (
                        <div key={option.id} className="question-radio">
                            <label htmlFor={String(option.id)}>{option.label}</label>
                            <input type="radio" id={String(option.id)} value={this.props.data.answer} onClick={() => this.handleAnswer(option.id)} />
                        </div>
                    ))}
                </form>
            </div>
        );
    }
}

export default SelectQuestion;
