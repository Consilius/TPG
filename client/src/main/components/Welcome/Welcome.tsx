import * as React from "react";

interface Props {
    setStep(step: number);
    numberOfTestedUsers: number;
}

const Welcome: React.FunctionComponent<Props> = ({ setStep, numberOfTestedUsers }) => (
    <div className="question">
        <h1 className="welcome-title">Vitaj!</h1>
        <p className="welcome-text">
            Pripravili sme pre teba krátky test pozostávajúci z 10 otázok ohľadom nadchádzjúcich parlamentných volieb.
            Otestuj svoj prehľad!
        </p>
        <p className="user-count-welcome">Už <span>{numberOfTestedUsers | 0}</span> z nás sa otestovalo</p>
        <button className="btn btn-start" onClick={() => {setStep(1)}}>Štart</button>
        <div className="swipe-wrapper">
            <p onClick={() => {setStep(1)}} >Štart</p>
            <div className="swipe">
                <img src="icon-left.png"></img>
                <img src="icon-left.png"></img>
                <img src="icon-left.png"></img>
            </div>
        </div>        
    </div>
);

export default Welcome;
