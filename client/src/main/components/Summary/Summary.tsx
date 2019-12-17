import * as React from "react";
import { Data } from "../../interfaces";
import AnswerQuestion from "../AnswerQuestion/AnswerQuestion";

interface Props {
    data: Data[];
}

const Summary: React.FunctionComponent<Props> = ({ data }) => (
    <>
        {data.map((question) => (
            <div key={question.id} className="summary-row">
                <p className="upperCase">
                    Otázka: {question.description}
                </p>
                <AnswerQuestion
                    answer={question.answer.label}
                    correctAnswer={question.correctAnswer.label}
                    source={"source"}
                />
            </div>
        ))}
    </>
);

export default Summary;
