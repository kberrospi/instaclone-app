import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children, uid }: any) => {
  return !!uid
    ? <Navigate to='/' />
    : children

}