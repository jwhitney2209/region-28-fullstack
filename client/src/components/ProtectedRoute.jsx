import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import AuthService from '../utils/auth'

export default function ProtectedRoute() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!AuthService.loggedIn()) {
      navigate('/login')
    }
  }, [navigate])
  return <Outlet />
}
