export interface DataBoolean {
    type: string;
    title: string;
    description: string;
    // answer: boolean | number;
    answer: any;
    correctAnswer: number;
}

export interface Data extends DataBoolean {
    options: {
        id: number;
        label: string;
    }[];
}
