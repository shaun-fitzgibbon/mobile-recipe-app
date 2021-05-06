import { ChangeEvent } from 'react'

export type InputChangeEvent = ChangeEvent<HTMLInputElement>

export interface Message {
  severity: 'warning' | 'success' | 'info' | 'error'
  message: string
}

export type status =
  | 'resting'
  | 'no-first-name'
  | 'no-last-name'
  | 'no-email'
  | 'no-password'
  | 'short-password'
  | 'no-confirm-password'
  | 'invalid-email'
  | 'no-match-passwords'
  | 'authenticating'
  | 'success'
  | 'failure'
  | 'technical-error'
