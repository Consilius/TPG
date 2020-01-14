import * as React from "react";
import classNames from "classnames";

interface Props {
    activeStep: number;
    totalSteps: number;
    setStep(step: number);
    disableStep(step: number);
}

class Navigation extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    renderLine = () => {
        const lines = [];
        for (let i = 1; i <= this.props.totalSteps; i++) {
            lines.push(
                <div
                    key={i}
                    className={classNames("navigation-step", { "active": this.props.activeStep === i, "gray": this.props.disableStep(i) })}
                    onClick={() => this.props.setStep(i)}
                >
                    {i === this.props.totalSteps ? "SU" : i}
                </div>
            );
        }
        return lines;
    }

    render() {
        return (
            <div className="navigation">
                {this.renderLine()}
            </div>
        );
    }
}

export default Navigation;
