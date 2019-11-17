import * as React from "react";
import { Data } from "../../interfaces";

interface Props {
    data: Data[];
}

const Summary: React.FunctionComponent<Props> = ({ data }) => (
    <div className="">
        {data.map((question) => (
            <div key={question.title} className="summary-row">
                Question: {question.title}
                Your answer: {question.answer}
                Correct answer: {question.correctAnswer}
            </div>
        ))}
    </div>
);

export default Summary;
