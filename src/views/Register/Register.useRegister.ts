import { FormEvent, useState } from 'react'
import validator from 'validator'
import GoTrue from 'gotrue-js'
import * as types from './Register.types'
import axios from 'axios'

const createHandler = (updateFn: (newValue: any) => void) => {
  return ({ target }: types.InputChangeEvent) => {
    updateFn(target.value)
  }
}

const auth = new GoTrue({
  APIUrl: process.env.REACT_APP_AUTH_URL,
})

export const useRegister = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const [message, setMessage] = useState<types.status>('resting')

  const updateFirstName = createHandler(setFirstName)
  const updateLastName = createHandler(setLastName)
  const updateEmail = createHandler(setEmail)
  const updatePassword = createHandler(setPassword)
  const updateConfirmPassword = createHandler(setConfirmPassword)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const createAccount = async (event: FormEvent) => {
    event.preventDefault()
    if (firstName.length < 1) return setMessage('no-first-name')
    if (lastName.length < 1) return setMessage('no-last-name')
    if (email.length < 1) return setMessage('no-email')
    if (password.length < 1) return setMessage('no-password')
    if (password.length < 8) return setMessage('short-password')
    if (confirmPassword.length < 1) return setMessage('no-confirm-password')
    if (!validator.isEmail(email)) return setMessage('invalid-email')
    if (password !== confirmPassword) return setMessage('no-match-passwords')

    setMessage('authenticating')

    await auth.signup(email, password).catch((error: Error) => {
      console.log("It's an error", error)
      setMessage('technical-error')
    })

    const user = await auth.login(email, password).catch((error: Error) => {
      console.log("It's an error", error)
      setMessage('technical-error')
    })

    if (!user) return setMessage('technical-error')

    await axios.post(
      '/api/addUser',
      { firstName, lastName },
      {
        headers: {
          Authorization: `Bearer ${user.token.access_token}`,
        },
      }
    )

    setMessage('success')
    window.sessionStorage.setItem('user', JSON.stringify(user))
  }

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    message,
    updateFirstName,
    updateLastName,
    updateEmail,
    updatePassword,
    updateConfirmPassword,
    toggleShowPassword,
    toggleShowConfirmPassword,
    createAccount,
  }
}

export default useRegister
