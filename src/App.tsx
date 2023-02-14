import React from 'react'
import QuizApp from './Quiz/QuizApp'
import QuizProvider from './Quiz/context/QuizProvider'

const App = () => {
  return (
    <>
      <QuizProvider>
        <QuizApp />
      </QuizProvider>
    </>
  )
}

export default App
