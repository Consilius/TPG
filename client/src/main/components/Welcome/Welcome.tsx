import * as React from "react";

interface Props {
    setStep(step: number);
}

const Welcome: React.FunctionComponent<Props> = ({ setStep }) => (
    <div className="question">
        <h1 className="welcome-title">Vitaj!</h1>
        <p className="welcome-text">
            Pripravili sme pre teba krátky test pozostávajúci z 10 otázok ohľadom nadchádzjúcich parlamentných volieb.
            Otestuj svoj prehľad
        </p>
        <div className="test-versions">
            <button className="btn selected">Verzia 1</button>
            <button className="btn gray">Verzia 2</button>
            <button className="btn gray">Verzia 3</button>
            <button className="btn gray">Verzia 4</button>
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
                <span className="question-radio-label">Verzia 1</span>
            </div>
            <div
                className="question-radio-mobile gray"
            >
                <div className="question-radio-circle">
                    <div className="outer-circle" />
                </div>
                <span className="question-radio-label">Verzia 2</span>
            </div>
            <div
                className="question-radio-mobile gray"
            >
                <div className="question-radio-circle">
                    <div className="outer-circle" />
                </div>
                <span className="question-radio-label">Verzia 3</span>
            </div>
            <div
                className="question-radio-mobile gray"
            >
                <div className="question-radio-circle">
                    <div className="outer-circle" />
                </div>
                <span className="question-radio-label">Verzia 4</span>
            </div>
        </div>
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
