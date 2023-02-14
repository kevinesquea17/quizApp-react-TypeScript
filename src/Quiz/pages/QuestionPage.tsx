import Card from '../components/Card'
import { useContext, useEffect, useState, useCallback } from 'react';
import QuizContext from '../context/QuizContext';
import AnswerList from '../components/AnswerList';


const QuestionPage = () => {

  const {gameState, changeQuestion} = useContext(QuizContext);
  const {questions, currentQuestion, score} = gameState;

  const [timer, setTimer] = useState(20)

  const decrementTimer =  useCallback(() => {
    setTimer((oldTimer) => oldTimer-1)
  },[]);

  const cambiarTimer = () => {
    setTimer(20);
  }

  useEffect(() => {
    if(timer <= 0){
      setTimer(20)
      changeQuestion();
      return
    }
    const timeoutFunction = setInterval(decrementTimer, 1000)
    return () => clearInterval(timeoutFunction);
  },[decrementTimer, timer])


  return (
    <Card>
        <div className='flex flex-col mb-10 sm:mb-4'>
            <p className='text-blue-500 text-sm font-semibold text-center mb-2'>Question {currentQuestion+1}/{questions.length}</p>
            <p className='text-2xl font-bold text-center text-gray-800'>{questions[currentQuestion].question}</p>
        </div>
        <AnswerList cambiarTimer={cambiarTimer} />
        <div className='flex justify-between'>
            <p className='p-1 rounded bg-gradient-to-r from-blue-400 to-blue-600 text-white'>Score: {score}/{questions.length * 10}</p>
            <p className='p-1 rounded bg-gradient-to-r from-blue-400 to-blue-600 text-white'>Time: {timer}</p>
        </div>
    </Card>
  )
}

export default QuestionPage