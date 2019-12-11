import * as React from "react";
import { Data } from "../../interfaces";
import AnswerQuestion from "../AnswerQuestion/AnswerQuestion";

interface Props {
    data: Data[];
}

const Summary: React.FunctionComponent<Props> = ({ data }) => (
    <div className="summary">
        {data.map((question) => (
            <div key={question.id} className="summary-row">
                <p className="upperCase">
                    Question: {question.title}
                </p>
                <AnswerQuestion
                    answer={question.answer.label}
                    correctAnswer={question.correctAnswer.label}
                    source={"source"}
                />
            </div>
        ))}
    </div>
);

export default Summary;
