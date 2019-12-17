import * as React from "react";
import classNames from "classnames";

interface Props {
    answer: string;
    correctAnswer: string;
    source: string;
}

const AnswerQuestion: React.FunctionComponent<Props> = ({ answer, correctAnswer, source }) => (
    <div className="answer">
        <p>
            <span className="">Tvoja odpoveď: </span>
            <span className={classNames({
                "green": answer == correctAnswer,
                "red": answer !== correctAnswer,
                "bold": true
            })}>{answer}</span>
        </p>
        <p>
            <span className="">Správna odpoveď: </span>
            <span className="bold green">{correctAnswer}</span>
        </p>
        <a href="">{source}</a>
    </div>
);

export default AnswerQuestion;
