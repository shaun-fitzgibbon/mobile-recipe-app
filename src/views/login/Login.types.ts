export interface Message {
  severity: 'warning' | 'success' | 'info' | 'error'
  message: string
}

export type status =
  | 'resting'
  | 'invalid-email'
  | 'short-password'
  | 'authenticating'
  | 'redirecting'
  | 'not-authenticated'
  | 'technical-error'
