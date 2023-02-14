import { array_questions } from "../Questions";
import { QuizState } from "../interfaces/interfaces"
import QuizContext from "./QuizContext"
import { useState } from 'react';


const INITIAL_STATE: QuizState = {
    username: '',
    starPage: true,
    questionPage: false,
    finalPage: false,
    score: 0,
    currentQuestion: 0,
    questions: array_questions
}

interface props{
    children: JSX.Element | JSX.Element[]
}

const QuizProvider = ({children}: props) => {

    const [gameState, setGameState] = useState<QuizState>(INITIAL_STATE);
    

    const setUsername = (username: string) => {
        setGameState(prevState => ({...prevState, username}));
    }

    const showQuestions = () => {
        setGameState(prevState => ({...prevState, starPage: false, questionPage: true}))
    }

    const onClickAnswer = (isCorrect: boolean) => {
        if(gameState.currentQuestion < gameState.questions.length - 1){
            if(isCorrect){
                setGameState(prevState => ({...prevState, score: prevState.score + 10}))
            }
            setGameState(prevState => ({...prevState, currentQuestion: prevState.currentQuestion + 1}))
        }else{
            if(isCorrect){
                setGameState(prevState => ({...prevState, score: prevState.score + 10}))
            } 
            setGameState(prevState => ({...prevState, questionPage: false, finalPage: true}))
              
        }
    }

    const changeQuestion = () => {
        if(gameState.currentQuestion < gameState.questions.length - 1){
            setGameState(prevState => ({...prevState, currentQuestion: gameState.currentQuestion + 1}))
        }else{
            setGameState(prevState => ({...prevState, questionPage: false, finalPage: true}))
        }
        
    }

    const restartGame = () => {
        setGameState(INITIAL_STATE);
    }

    return (
        <QuizContext.Provider value={{
            gameState,
            setUsername,
            showQuestions,
            onClickAnswer,
            restartGame,
            changeQuestion
        }}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizProvider;