export interface Answer{
    id: number
    answerItem: string
    answerText: string
    correct: boolean
}

export interface Question{
    id: number
    question: string
    answers: Answer[]
}

export interface QuizState{
    username: string
    starPage: boolean
    questionPage: boolean
    finalPage: boolean
    score: number,
    currentQuestion: number
    questions: Question[]
}