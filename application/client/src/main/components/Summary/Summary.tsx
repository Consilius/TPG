import * as React from "react";
import { Data } from "../../interfaces";

interface Props {
    data: Data[];
}

const Summary: React.FunctionComponent<Props> = ({ data }) => (
    <>
        {data.map((question) => (
            <div key={question.id} className="summary-row">
                <p>
                    Question: {question.title}
                </p>
                <p>
                    Your answer: {question.answer.label}
                </p>
                <p>
                    Correct answer: {question.correctAnswer.label}
                </p>
                <p>
                    <a href="">source</a>
                </p>
            </div>
        ))}
    </>
);

export default Summary;
