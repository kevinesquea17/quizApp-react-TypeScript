import React, { useContext, useState } from 'react'
import QuizContext from '../context/QuizContext';

interface Alert{
    msg: string
}

const Form = () => {

    const {gameState, setUsername, showQuestions} = useContext(QuizContext);
    const [alert, setAlert] = useState<Alert>({msg: ''})
    const {username} = gameState;

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if(username == ''){
            setAlert({msg: 'Debes ingresar un username'})
            return;
        }
        showQuestions();
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(evt.target.value)
    }

    return (
        <form className='w-[80%] mx-auto flex flex-col items-center' onSubmit={handleSubmit}>
            <div className='flex flex-col w-full mb-10'>
                <label className='font-semibold text-gray-800 text-center mb-4'>Please enter your username.</label>
                <input 
                    type="text" 
                    placeholder='Your username.' 
                    className='rounded px-2 py-3 bg-gray-200 text-center outline-none font-semibold text-gray-400'
                    value={username}
                    onChange={handleChange}
                />
                {alert.msg && <p className='text-base font-semibold text-red-500 mt-2 text-center'>{alert.msg}</p>}  
            </div>
            <input type="submit" value="Let's to Play" className='w-[80%] py-3 px-2 rounded bg-blue-500 text-white font-bold shadow-sm shadow-blue-500'/>
        </form>
    )
}

export default Form