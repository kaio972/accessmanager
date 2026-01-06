import type { User } from '../types/User'

export const getUsers = (): User[] => {
  return JSON.parse(localStorage.getItem('users') || '[]')
}

export const saveUsers = (users: User[]) => {
  localStorage.setItem('users', JSON.stringify(users))
}

export const generateUserId = (): string =>
  'USR-' + Math.floor(1000 + Math.random() * 9000)

export const generateCode = (): string =>
  Math.floor(100000 + Math.random() * 900000).toString()
