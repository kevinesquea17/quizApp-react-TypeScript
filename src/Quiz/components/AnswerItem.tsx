import React from 'react'
import { Answer } from '../interfaces/interfaces'
import { useContext } from 'react';
import QuizContext from '../context/QuizContext';

interface AnswerProps{
    answer: Answer,
    cambiarTimer: () => void
}

const AnswerItem = ({answer, cambiarTimer}: AnswerProps) => {

    const {onClickAnswer} = useContext(QuizContext)

    const handleClick = (isCorrect: boolean) => {
        onClickAnswer(isCorrect);
        cambiarTimer();
    }

    return (
        <div onClick={() => handleClick(answer.correct)} className='flex space-x-10 items-center p-2 rounded bg-gray-700 text-white mb-3 hover:bg-blue-500 transition duration-300 ease-out'>
            <div className='w-8 h-8 rounded-full bg-white text-gray-800 flex justify-center items-center'>{answer.answerItem}</div>
            <div className='font-bold'>{answer.answerText}</div>
        </div>
    )
}

export default AnswerItem