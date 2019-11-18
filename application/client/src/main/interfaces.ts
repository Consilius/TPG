export interface DataBoolean {
    id: number,
    type: string;
    title: string;
    description: string;
    answer: Answer;
    correctAnswer: Answer;
}

export interface Data extends DataBoolean {
    options: Answer[];
}

export interface Answer {
    label: string;
    value: number;
}