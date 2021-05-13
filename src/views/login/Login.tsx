import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Alert } from '@material-ui/lab'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import useLogin from './Login.useLogin'
import { STATUS_ALERT_MESSAGES } from './Login.constants'

import {
  TextField,
  Button,
  Grid,
  Link,
  Typography,
  Avatar,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
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

const StyledAvatar = styled(Avatar)`
  && {
    background-color: #ec5990;
  }
`

const Login = () => {
  const {
    email,
    password,
    showPassword,
    statusMessage,
    updateEmail,
    updatePassword,
    toggleShowPassword,
    authenticate,
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
    <PageWrapper>
      <CenteredDiv>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
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
          <Grid item xs={12}>
            <FormControl
              variant='outlined'
              margin='normal'
              // autoComplete='current-password'
              required
              fullWidth
            >
              <InputLabel htmlFor='password'>Password</InputLabel>
              <OutlinedInput
                id='password'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={updatePassword}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={toggleShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={90}
              />
            </FormControl>
          </Grid>
        </ItemWrapper>

        {alertMessage}

        <ItemWrapper>
          <Button type='submit' fullWidth variant='contained' color='primary'>
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} variant='body2' to='/forgotpassword'>
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
  )
}

export default Login
