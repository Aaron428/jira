import {useAuth} from 'context/auth-context'
import React, {FormEvent} from 'react'

export const LoginIndex = () => {
  const {login, user} = useAuth()

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value
    login({username, password})
  }
  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>{user?.name}</div> : null}
      <div>
        <label htmlFor="username">username</label>
        <input type="text" id={'username'} />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id={'password'} />
      </div>

      <button type={'submit'}>login</button>
    </form>
  )
}
