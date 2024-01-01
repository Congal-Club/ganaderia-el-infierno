import { useState } from 'react'

export default function ResponsiveMenu() {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <div>
      <div className='md:hidden'>
        <button
          onClick={() => setIsHidden(!isHidden)}
          className='mx-4 text-white focus:outline-none'
        >
          {isHidden ? (
            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-menu-2' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
              <path d='M4 6l16 0' />
              <path d='M4 12l16 0' />
              <path d='M4 18l16 0' />
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-x' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
              <path d='M18 6l-12 12' />
              <path d='M6 6l12 12' />
            </svg>
          )}
        </button>
      </div>

      <div className={`
        md:hidden ${isHidden && 'hidden'}
        fixed top-0 right-0 bottom-0 w-[70%] bg-slate-800 z-50 p-4 rounded-bl-md shadow-2xl
      `}>
        <ul className='flex flex-col items-start justify-center gap-4'>
          <li>
            <a
              href='/contact'
              title='Telefono'
              className='flex text-slate-100 justify-between items-center gap-1 text-lg [&>svg]:w-4 [&>svg]:h-4'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-phone-filled' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z' strokeWidth='0' fill='currentColor'></path>
              </svg>

              <span>
                Contacto
              </span>
            </a>
          </li>

          <li>
            <a
              href='/account'
              title='Mi cuenta'
              className='flex text-slate-100 justify-between items-center gap-1 text-lg [&>svg]:w-4 [&>svg]:h-4'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-user' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>
                <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
              </svg>
              
              <span>
                Mi cuenta
              </span>
            </a>
          </li>

          <li>
            <a
              href='/wish-list'
              title='Lista de deseos'
              className='flex text-slate-100 justify-between items-center gap-1 text-lg [&>svg]:w-4 [&>svg]:h-4'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-heart-filled' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z' strokeWidth='0' fill='currentColor'></path>
              </svg>

              <span>
                Lista de deseos
              </span>
            </a>
          </li>

          <li>
            <a
              href='/cart'
              title='Carrito de compras'
              className='flex text-slate-100 justify-between items-center gap-1 text-lg [&>svg]:w-4 [&>svg]:h-4'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-shopping-cart-filled' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z' strokeWidth='0' fill='currentColor'></path>
              </svg>

              <span>
                Carrito de compras
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
