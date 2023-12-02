import toast from 'react-hot-toast'
export default function AddToWishList({ id, stock, product}){
  return(
    <div>
      <button className="action-button" onClick={()=>{
         const wishListInStorage = localStorage.getItem('wishlist')
         const newProduct = product; 

         if (wishListInStorage) {
           const wishlist = JSON.parse(wishListInStorage)
           wishlist.push(newProduct)
           localStorage.setItem('wishlist', JSON.stringify(wishlist))
           toast.success('Producto agregado a la lista de deseos', {
            duration: 5000,
            position: 'bottom-right',
          })
          } else {
            const wishlist =  [newProduct]; 
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
            toast.success('Producto agregado a la lista de deseos', {
              duration: 5000,
              position: 'bottom-right',
            })
          }
         
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" stroke-width="0" fill="currentColor"></path>
      </svg> Agregar a Lista de Deseos
      </button>
      <style>
        {`
          .action-button {
            padding-block: 0.5rem;
            padding-inline: 0.5rem;
            margin-right: 0.5rem;
            border-radius: 0.25rem;
            color: #fff;
            background-color: rgb(51 65 85);
            transition: all 0.2s ease;
            display: flex;
            gap: 0.25rem;
          }
        `}
      </style>
    </div>
  )
}