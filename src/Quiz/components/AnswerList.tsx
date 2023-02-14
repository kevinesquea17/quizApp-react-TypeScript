import { useContext } from 'react';
import QuizContext from '../context/QuizContext';
import AnswerItem from '../components/AnswerItem';

interface Props{
    cambiarTimer: () => void
}

const AnswerList = ({cambiarTimer}: Props) => {

    const {gameState} = useContext(QuizContext);
    const {questions, currentQuestion} = gameState;

    return (
        <div>
            {questions[currentQuestion].answers.map(answer => (
                <AnswerItem answer={answer} key={answer.id} cambiarTimer={cambiarTimer}/>
            ))}
        </div>
    )
}

export default AnswerList