import * as React from "react";
import { DataBoolean } from "../../interfaces";

interface Props {
    data: DataBoolean;
    handleAnswer(value: boolean);
}

interface State {
    animateTitleOut: boolean;
    animateDescriptionOut: boolean;
    animateButtonsOut: boolean;
    animateTitleIn: boolean;
    animateDescriptionIn: boolean;
    animateButtonsIn: boolean;
}

class BooleanQuestion extends React.PureComponent<Props, State> {
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

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({
                animateTitleOut: false,
                animateDescriptionOut: false,
                animateButtonsOut: false,
            })
        }
    }

    handleAnswer = (value: boolean) => {
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
                <div className={this.buttonsClassName("btn-group")}>
                    <button className="btn bcg-green" onClick={() => this.handleAnswer(true)} >True</button>
                    <button className="btn bcg-red" onClick={() => this.handleAnswer(false)}>False</button>
                </div>
            </div>
        );
    }
}

export default BooleanQuestion;
