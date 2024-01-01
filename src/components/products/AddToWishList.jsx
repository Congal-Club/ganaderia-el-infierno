import toast from 'react-hot-toast'

export default function AddToWishList({ product }){
  const handleAddToWishList = () => {
    const wishListInStorage = localStorage.getItem('wishlist')
    const newProduct = product

    if (wishListInStorage) {
      const wishlist = JSON.parse(wishListInStorage)
      wishlist.push(newProduct)
      localStorage.setItem('wishlist', JSON.stringify(wishlist))

      toast.success('Producto agregado a la lista de deseos', {
        duration: 5000,
        position: 'bottom-right',
      })
    } else {
      const wishlist =  [newProduct]
      localStorage.setItem('wishlist', JSON.stringify(wishlist))

      toast.success('Producto agregado a la lista de deseos', {
        duration: 5000,
        position: 'bottom-right',
      })
    }
  }

  return(
    <button
      className='flex items-center justify-start gap-2 px-2 py-1 text-base font-bold text-white transition bg-indigo-500 rounded-md hover:scale-105 hover:shadow-lg hover:bg-indigo-700'
      onClick={handleAddToWishList}
    >
      <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-heart-filled' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z' strokeWidth='0' fill='currentColor'></path>
      </svg>

      <span>Agregar a Lista de Deseos</span>
    </button>
  )
}
