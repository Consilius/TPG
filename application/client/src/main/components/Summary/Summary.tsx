import * as React from "react";
import { Data } from "../../interfaces";

interface Props {
    data: Data[];
}

const Summary: React.FunctionComponent<Props> = ({ data }) => (
    <>
        {data.map((question) => (
            <div key={question.title} className="summary-row">
                <p>
                    Question: {question.title}
                </p>
                <p>
                    Your answer: {question.answer}
                </p>
                <p>
                    Correct answer: {question.correctAnswer}
                </p>
            </div>
        ))}
    </>
);

export default Summary;
