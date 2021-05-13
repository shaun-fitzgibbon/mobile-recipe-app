import * as types from './Register.types'

export const STATUS_ALERT_MESSAGES: Record<
  Exclude<types.status, 'resting'>,
  types.Message
> = {
  'no-first-name': {
    severity: 'warning',
    message: 'Enter a first name',
  },
  'no-last-name': {
    severity: 'warning',
    message: 'Enter a last name',
  },
  'no-email': {
    severity: 'warning',
    message: 'Enter a email',
  },
  'no-password': {
    severity: 'warning',
    message: 'Enter a password',
  },
  'short-password': {
    severity: 'warning',
    message: 'password must be longer than 8 charecters',
  },
  'no-confirm-password': {
    severity: 'warning',
    message: 'Enter a  confirm password',
  },
  'invalid-email': {
    severity: 'warning',
    message: 'Email is invalid',
  },
  'no-match-passwords': {
    severity: 'warning',
    message: 'Passwords dont match',
  },
  authenticating: {
    severity: 'warning',
    message: 'Authenticating...',
  },
  success: {
    severity: 'success',
    message: 'Success...',
  },
  failure: {
    severity: 'warning',
    message: 'Failed...',
  },
  'technical-error': {
    severity: 'warning',
    message: 'Technical error',
  },
}
