import { useContext } from 'react'
import FinalPage from './pages/FinalPage'
import QuestionPage from './pages/QuestionPage'
import StartPage from './pages/StartPage'
import QuizContext from './context/QuizContext';

const QuizApp = () => {

  const {gameState} = useContext(QuizContext);
  
  return (
    <div className='bg-gray-100 h-screen w-full flex justify-center items-center font-Prompt'>
        {gameState.starPage && <StartPage />}
        {gameState.questionPage && <QuestionPage />}
        {gameState.finalPage && <FinalPage /> }
    </div>
  )
}

export default QuizApp
