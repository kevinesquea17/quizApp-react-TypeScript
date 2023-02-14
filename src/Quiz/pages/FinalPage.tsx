import React from 'react'
import Card from '../components/Card'
import { useContext } from 'react';
import QuizContext from '../context/QuizContext';

const FinalPage = () => {

  const {gameState, restartGame} = useContext(QuizContext);
  const {questions, username, score} = gameState;

  const handleClick = () => {
    restartGame();
  }

  return (
    <Card>
        <h2 className='text-2xl font-bold text-center mb-20 text-blue-500'>{username} <span className='text-gray-800'>Has finalizado nuestro Quiz!</span></h2>
        <div className='flex flex-col items-center'>
            <p className='text-center text-gray-800 font-semibold mb-3'>Tu puntaje:</p>
            <p className='bg-gradient-to-r from-blue-400 to-blue-600 rounded p-1 px-4 text-white inline-block text-center mb-12'>{score}/{questions.length * 10}</p>
            <button onClick= {handleClick}  className='w-[70%] mx-auto rounded py-3 text-white bg-gray-800 shadow-sm shadow-gray-800'>Restart Game</button>
        </div>
        
    </Card>
  )
}

export default FinalPage