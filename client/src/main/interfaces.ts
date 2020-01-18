export interface DataBoolean {
    id: number;
    type: string;
    description: string;
    answer: Answer;
    correctAnswer: Answer;
}

export interface Data extends DataBoolean {
    options?: Answer[];
    showControls?: boolean;
}

export interface Answer {
    label: string;
    value: number;
}
