import { useState } from 'react'

export default function AdminMenu() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='w-1/5 bg-slate-800 fixed top-0 bottom-0 overflow-y-scroll nav-scroll transition'>
      <ul>
        <li className={`text-gray-100 border-b border-gray-700`}>
          <a
            href='/admin'
            className={`
              ${window.location.pathname === '/admin' && 'text-sky-600 font-medium'}
              py-2 px-4 flex flex-row justify-start items-center gap-2 w-full
              ${window.location.pathname === '/admin' && 'bg-gray-900'}
            `}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} className='icon icon-tabler icon-tabler-home'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7' />
              <path d='M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6' />
            </svg>{' '}
            Panel de control
          </a>
        </li>

        <li className='text-gray-100 border-b border-gray-700'>
          <MenuItem
            icon={
              <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} className='icon icon-tabler icon-tabler-tag'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <path d='M6.5 7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0' />
                <path d='M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592-5.592a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3z' />
              </svg>
            }
            text='Catálogo'
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
            icon={
              <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} className='icon icon-tabler icon-tabler-user'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <path d='M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2' />
              </svg>
            }
            text='Usuarios'
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
            icon={
              <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} className='icon icon-tabler icon-tabler-settings'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z' />
                <path d='M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0' />
              </svg>
            }
            text='Sistema'
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

function MenuItem({ children, icon, text }) {
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

        <span>
          {text}
        </span>

        <span className='flex-1 justify-end flex'>
          {isOpen ? (
            <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} className='icon icon-tabler icon-tabler-chevron-down'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='m6 9 6 6 6-6' />
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} className='icon icon-tabler icon-tabler-chevron-right'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='m9 6 6 6-6 6' />
            </svg>
          )}
        </span>
      </button>

      {isOpen && (
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
