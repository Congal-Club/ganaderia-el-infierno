import Cookies from 'js-cookie'
import { COOKIE_NAME } from '../../constants'

export default function Logout() {
  const handleLogout = () => {
    Cookies.remove(COOKIE_NAME)
    window.location.href = '/login'
  }

  return (
    <button onClick={handleLogout} className='py-1 px-4 bg-red-600 text-white font-bold mt-2 rounded hover:bg-red-700 hover:shadow hover:scale-105 transition'>
      Cerrar sesión
    </button>
  )
}
