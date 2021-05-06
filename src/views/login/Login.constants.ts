import * as types from './Login.types'

export const STATUS_ALERT_MESSAGES: Record<
  Exclude<types.status, 'resting'>,
  types.Message
> = {
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
  'technical-error': {
    severity: 'error',
    message: 'there was a technical error',
  },
}
