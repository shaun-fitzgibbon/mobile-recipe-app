import { Alert } from '@material-ui/lab'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import useLogin from './Login.useLogin'
import { STATUS_ALERT_MESSAGES } from './Login.constants'

import {
  TextField,
  Button,
  CssBaseline,
  Grid,
  Link,
  Typography,
  Avatar,
} from '@material-ui/core'

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

const Login = () => {
  const {
    authenticate,
    email,
    password,
    statusMessage,
    updateEmail,
    updatePassword,
  } = useLogin()

  const alertMessage =
    statusMessage === 'resting' ? null : (
      <ItemWrapper>
        <Alert severity={STATUS_ALERT_MESSAGES[statusMessage].severity}>
          {STATUS_ALERT_MESSAGES[statusMessage].message}
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

        <form noValidate onSubmit={authenticate}>
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
              onChange={updateEmail}
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
              onChange={updatePassword}
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
