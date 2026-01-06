import type { User } from '../types/User'
import { getUsers } from './userService'

const ADMIN_EMAIL = 'admin@email.com'
const ADMIN_PASSWORD = '123456'
const ADMIN_DELETE_CODE = '2010'

export function adminLogin(email: string, password: string) {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export function getAllUsers(): User[] {
  return getUsers()
}

export function validateAdminCode(code: string) {
  return code === ADMIN_DELETE_CODE
} 
