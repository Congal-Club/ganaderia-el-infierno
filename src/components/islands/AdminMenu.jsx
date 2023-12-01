import { useState } from 'react'

import ChevronDown from './icons/ChevronDown'
import ChevronRight from './icons/ChevronRight'
import Home from './icons/Home'
import Menu from './icons/Menu'
import Settings from './icons/Settings'
import Tag from './icons/Tag'
import User from './icons/User'

export default function AdminMenu() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`${isOpen && 'w-1/5'} bg-slate-800 fixed top-16 bottom-0 overflow-y-scroll nav-scroll transition`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-white py-2 px-4 mb-2 flex flex-row justify-start items-center gap-2'
      >
        <Menu />{' '}
        {isOpen && 'Navegación'}
      </button>

      <ul>
        <li className={`text-gray-100 border-b border-gray-700`}>
          <a
            href="/admin"
            className={`
              ${window.location.pathname === '/admin' && 'text-sky-600 font-medium'}
              py-2 px-4 flex flex-row justify-start items-center gap-2 w-full
              ${window.location.pathname === '/admin' && 'bg-gray-900'}
            `}
          >
            <Home />{' '}
            {isOpen && 'Panel de control'}
          </a>
        </li>

        <li className='text-gray-100 border-b border-gray-700'>
          <MenuItem
            icon={<Tag />}
            text='Catálogo'
            showText={isOpen}
          >
            <Link
              path='/admin/categories'
              activePath={window.location.pathname}
              text='Categorías'
            />

            <Link
              path='/admin/products'
              activePath={window.location.pathname}
              text='Productos'
            />

            <Link
              path='/admin/reviews'
              activePath={window.location.pathname}
              text='Reseñas'
            />
          </MenuItem>
        </li>

        <li className='text-gray-100 border-b border-gray-700'>
          <MenuItem
            icon={<User />}
            text='Usuarios'
            showText={isOpen}
          >
            <Link
              path='/admin/users'
              activePath={window.location.pathname}
              text='Usuarios'
            />
          </MenuItem>
        </li>

        <li className='text-gray-100 border-b border-gray-700'>
          <MenuItem
            icon={<Settings />}
            text='Sistema'
            showText={isOpen}
          >
            <Link
              path='/'
              activePath={window.location.pathname}
              text='Ir a la tienda'
            />
          </MenuItem>
        </li>
      </ul>
    </div>
  )
}

function MenuItem({ children, icon, showText, text }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        className='w-full py-2 px-4 flex flex-row justify-start items-center gap-2'
        onClick={handleToggle}
      >
        <span>
          {icon}{' '}
        </span>

        {showText && (
          <>
            <span>
              {text}
            </span>

            <span className='flex-1 justify-end flex'>
              {isOpen ? <ChevronDown /> : <ChevronRight />}
            </span>
          </>
        )}
      </button>

      {(isOpen && showText) && (
        <section className='bg-slate-900'>
          {children}
        </section>
      )}
    </div>
  )
}

function Link({ path, activePath, text }) {
  return (
    <a
      href={path}
      className={`
        ${activePath === path && 'text-sky-600 font-medium'}
        ${activePath === path && 'bg-slate-700'}
        py-2 px-8 block w-full
      `}
    >
      {text}
    </a>
  )
}
