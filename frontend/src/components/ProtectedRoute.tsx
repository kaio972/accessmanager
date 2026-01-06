import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: ReactNode
  isAdmin?: boolean
}

export const ProtectedRoute = ({ children, isAdmin }: ProtectedRouteProps) => {
  const userIsAdmin = sessionStorage.getItem('isAdmin') === 'true'

  if (isAdmin && !userIsAdmin) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}
