import React from 'react'
import Card from '../components/Card'
import Form from '../components/Form'

const StartPage = () => {
  return (
    <Card>
        <h2 className='text-3xl font-bold text-blue-500 text-center mb-20'>Welcome <span className='text-gray-800'>to Quiz App</span></h2>
        <Form />
    </Card>
  )
}

export default StartPage
