import type { User } from '../types/User'

let users: User[] = []

export function createUser(user: User) {
  users.push(user)
}

export function getUsers() {
  return users
}

export function deleteUser(id: number) {
  users = users.filter(user => user.id !== id)
}
