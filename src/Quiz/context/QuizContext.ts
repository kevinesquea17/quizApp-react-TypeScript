import { createContext } from "react";
import { QuizState } from "../interfaces/interfaces";

interface QuizContextProps {
    gameState: QuizState,
    setUsername: (username: string) => void
    showQuestions: () => void,
    onClickAnswer: (isCorrect: boolean) => void
    restartGame: () => void
    changeQuestion:  () => void
}

const QuizContext = createContext<QuizContextProps>({} as QuizContextProps);

export default QuizContext;