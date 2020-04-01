import * as React from "react";

interface Props {
    setStep(step: number);
}

const Welcome: React.FunctionComponent<Props> = ({ setStep }) => (
    <div className="question">
        <h1 className="welcome-title">Vitaj!</h1>
        <p className="welcome-text">
            Ďakujeme všetkým, ktorí sa podielali na zvýšení informovanosti voličov v parlamentných voľbách 2020.
        </p>
        <p className="user-count-welcome">Otestovalo sa 600 voličov</p>      
    </div>
);

export default Welcome;
