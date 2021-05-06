import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Alert } from '@material-ui/lab'

import {
  TextField,
  Button,
  CssBaseline,
  Grid,
  Link,
  Typography,
  Avatar,
} from '@material-ui/core'

import { STATUS_ALERT_MESSAGES } from './Register.constants'
import useRegister from './Register.useRegister'

const InputWrapper = styled.div`
  padding: 0.5rem;
`

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
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    message,
    updateFirstName,
    updateLastName,
    updateEmail,
    updatePassword,
    updateConfirmPassword,
    createAccount,
  } = useRegister()

  const alertMessage =
    message === 'resting' ? null : (
      <ItemWrapper>
        <Alert severity={STATUS_ALERT_MESSAGES[message].severity}>
          {STATUS_ALERT_MESSAGES[message].message}
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
            Register
          </Typography>
        </CenteredDiv>

        <form noValidate autoComplete='off' onSubmit={createAccount}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <InputWrapper>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='firstname'
                  label='First Name'
                  name='firstname'
                  autoComplete='fname'
                  autoFocus
                  value={firstName}
                  onChange={updateFirstName}
                />
              </InputWrapper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputWrapper>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='lastname'
                  label='Last Name'
                  name='lastname'
                  autoComplete='lname'
                  value={lastName}
                  onChange={updateLastName}
                />
              </InputWrapper>
            </Grid>
            <Grid item xs={12}>
              <InputWrapper>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={email}
                  onChange={updateEmail}
                />
              </InputWrapper>
            </Grid>
            <Grid item xs={12}>
              <InputWrapper>
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
              </InputWrapper>
            </Grid>
            <Grid item xs={12}>
              <InputWrapper>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='confirmpassword'
                  label='Confirm Password'
                  type='password'
                  id='confirmpassword'
                  autoComplete='current-password'
                  value={confirmPassword}
                  onChange={updateConfirmPassword}
                />
              </InputWrapper>
            </Grid>
          </Grid>
          <InputWrapper>
            {alertMessage}

            <Button type='submit' fullWidth variant='contained' color='primary'>
              Register
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs>
                <Link component={RouterLink} variant='body2' to='/login'>
                  {'Already have an account? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </InputWrapper>
        </form>
      </PageWrapper>
    </>
  )
}

export default Login
