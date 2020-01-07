import * as React from "react";

interface Props {
    activeStep: number;
    totalSteps: number;
    setStep(step: number);
}

class NavigationMobile extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="navigation-mobile-wrapper">
                <div className="navigation-mobile" style={{ opacity: this.props.activeStep !== 0 ? "1" : "0"}}>
                    <div
                        className="navigation-dot-secondary"
                        style={{ "opacity": this.props.activeStep !== 1 ? ".8" : "0" }}
                        onClick={() => this.props.setStep(this.props.activeStep - 1)}
                    >
                        {this.props.activeStep - 1}
                    </div>
                    <div className="navigation-dot-primary active">
                        {this.props.activeStep !== this.props.totalSteps ? this.props.activeStep : "SU" }
                    </div>
                    <div
                        className="navigation-dot-secondary"
                        style={{ "opacity": this.props.activeStep !== this.props.totalSteps ? ".8" : "0" }}
                        onClick={() => this.props.setStep(this.props.activeStep + 1)}
                    >
                        {this.props.activeStep !== this.props.totalSteps - 1 ? this.props.activeStep + 1 : "SU"}
                    </div>
                </div>
                <h1 className="welcome-title-mobile" style={{ opacity: this.props.activeStep === 0 ? "1" : "0" }}>Vitaj!</h1>
            </div>
        );
    }
}

export default NavigationMobile;
