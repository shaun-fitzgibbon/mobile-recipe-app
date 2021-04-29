import { ChangeEvent, FormEvent, useState } from 'react'
import validator from 'validator'
import { Redirect } from 'react-router-dom'
import {
  TextField,
  Button,
  CssBaseline,
  Grid,
  Link,
  Typography,
  Avatar,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { status } from '../data/index'

interface Message {
  severity: 'warning' | 'success' | 'info' | 'error'
  message: string
}

const STATUS_ALERT_MESSAGES: Record<Exclude<status, 'resting'>, Message> = {
  'invalid-email': {
    severity: 'warning',
    message: 'Your email is invalid',
  },
  'not-authenticated': {
    severity: 'error',
    message: 'Invalid Login details',
  },
  'short-password': {
    severity: 'warning',
    message: 'Password must be more than 7 characters',
  },
  authenticating: {
    severity: 'info',
    message: 'Checking login Details...',
  },
  redirecting: {
    severity: 'success',
    message: 'Redirecting...',
  },
}

const ItemWrapper = styled.div`
  padding: 0.5rem;
`

const PageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: #eee;
  display: Flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const CenteredDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`
const createMockCall = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), 2000)
  })

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [statusMessage, setStatusMessage] = useState<status>('resting')

  const handleEmail = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value)
  }

  const handlePassword = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value)
  }

  const handleSubmit = (event: FormEvent) => {
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

    const response = createMockCall()

    if (!response) {
      setStatusMessage('not-authenticated')
      return
    }

    setStatusMessage('redirecting')

    //Redirect to='/recipes'
  }

  const alertMessage =
    status === 'resting' ? null : (
      <ItemWrapper>
        <Alert severity={STATUS_ALERT_MESSAGES[status].severity}>
          {STATUS_ALERT_MESSAGES[status].message}
        </Alert>
      </ItemWrapper>
    )

  return (
    <>
      <CssBaseline />

      <PageWrapper>
        <CenteredDiv>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
        </CenteredDiv>

        <form noValidate onSubmit={handleSubmit}>
          <ItemWrapper>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={handleEmail}
            />
          </ItemWrapper>
          <ItemWrapper>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={handlePassword}
            />
          </ItemWrapper>

          {alertMessage}

          <ItemWrapper>
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  component={RouterLink}
                  variant='body2'
                  to='/forgotpassword'
                >
                  {'Forgot password?'}
                </Link>
              </Grid>
              <Grid item xs>
                <Link component={RouterLink} variant='body2' to='/register'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </ItemWrapper>
        </form>
      </PageWrapper>
    </>
  )
}

export default Login
