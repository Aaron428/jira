import React, {useState} from 'react'
import {LoginIndex} from './login'
import {RegisterIndex} from './register'

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <div>
      {isRegister ? <RegisterIndex /> : <LoginIndex />}
      <button onClick={() => setIsRegister(!isRegister)}>
        switch to {isRegister ? 'login' : 'register'}
      </button>
    </div>
  )
}
