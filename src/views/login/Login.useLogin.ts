import { ChangeEvent, FormEvent, useState } from 'react'
import validator from 'validator'
import GoTrue from 'gotrue-js'

import * as types from './Login.types'

const auth = new GoTrue({
  APIUrl: process.env.REACT_APP_AUTH_URL,
})

export const useLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [statusMessage, setStatusMessage] = useState<types.status>('resting')

  const updateEmail = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value)
  }

  const updatePassword = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value)
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const authenticate = async (event: FormEvent) => {
    event.preventDefault()
    if (!validator.isEmail(email)) {
      setStatusMessage('invalid-email')
      return
    }
    if (password.length < 8) {
      setStatusMessage('short-password')
      return
    }

    setStatusMessage('authenticating')

    const user = await auth.login(email, password).catch((error: Error) => {
      console.log("It's an error", error)
      setStatusMessage('technical-error')
    })

    if (!user) {
      setStatusMessage('not-authenticated')
      return
    }

    setStatusMessage('redirecting')

    //Redirect to='/recipes'
  }

  return {
    email,
    password,
    showPassword,
    statusMessage,
    updateEmail,
    updatePassword,
    toggleShowPassword,
    authenticate,
  }
}

export default useLogin
