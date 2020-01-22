import * as React from "react";

interface Props {
    setStep(step: number);
}

const Welcome: React.FunctionComponent<Props> = ({ setStep, cookiesAccepted }) => (
    <div className="question">
        <h1 className="welcome-title">Vitaj!</h1>
        <p className="welcome-text">
            Pripravili sme pre teba krátky test pozostávajúci z 10 otázok ohľadom nadchádzjúcich parlamentných volieb.
            Otestuj svoj prehľad!
        </p>
        <div className="test-versions">
            <button className="btn selected">Prvý test</button>
            <button className="btn gray">Druhý test <p>dostupný od 1.2.2020</p></button>
            <button className="btn gray">Tretí test <p>dostupný od 8.2.2020</p></button>
            <button className="btn gray">Štvrtý test <p>dostupný od 15.2.2020</p></button>
        </div>
        <div className="test-versions-mobile">
            <div
                className="question-radio-mobile"
            >
                <div className="question-radio-circle">
                    <div className="outer-circle">
                        <div className="inner-circle"></div>
                    </div>
                </div>
                <span className="question-radio-label">Prvý test</span>
            </div>
            <div
                className="question-radio-mobile gray"
            >
                <div className="question-radio-circle">
                    <div className="outer-circle" />
                </div>
                <span className="question-radio-label">Druhý test <p>dostupný od 1.2.2020</p></span>
            </div>
            <div
                className="question-radio-mobile gray"
            >
                <div className="question-radio-circle">
                    <div className="outer-circle" />
                </div>
                <span className="question-radio-label">Tretí test <p>dostupný od 8.2.2020</p></span>
            </div>
            <div
                className="question-radio-mobile gray"
            >
                <div className="question-radio-circle">
                    <div className="outer-circle" />
                </div>
                <span className="question-radio-label">Štvrtý test <p>dostupný od 15.2.2020</p></span>
            </div>
        </div>
        <button className="btn btn-start" onClick={() => {setStep(1)}} style={{ opacity: cookiesAccepted ? 1 : 0 }}>Štart</button>
        <div className="swipe-wrapper" style={{ opacity: cookiesAccepted ? 1 : 0 }}>
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
