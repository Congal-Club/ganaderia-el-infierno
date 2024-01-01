import Cookies from 'js-cookie'
import { COOKIE_NAME } from '../../constants'

export default function Logout() {
  const handleLogout = () => {
    Cookies.remove(COOKIE_NAME)
    window.location.href = '/login'
  }

  return (
    <button onClick={handleLogout} className='px-4 py-1 mt-2 font-bold text-white transition bg-red-600 rounded hover:bg-red-700 hover:shadow hover:scale-105'>
      Cerrar sesión
    </button>
  )
}
