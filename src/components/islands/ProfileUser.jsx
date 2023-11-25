export default function ProfileUser(){
  return(
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-white rounded-lg p-4 shadow-md">
      <h2 class="text-2xl text-slate-800 font-medium mb-4">Mi Cuenta</h2>
      <ul class="text-blue-600">
        <a href="/modifyAccount">
          <li class="py-1 hover:text-blue-800 block max-w-max">Editar la información de la cuenta</li>
        </a>
        <a href="/changePassword">
          <li class="py-1  hover:text-blue-800 block max-w-max">Cambiar tu contraseña</li>
        </a>
        <a href="/wish-list">
          <li class="py-1  hover:text-blue-800 block max-w-max" >Modificar tu lista de deseos</li>
        </a>

      </ul>
    </div>
    <div class="bg-white rounded-lg p-4 shadow-md">
      <h2 class="text-2xl text-slate-800 font-medium mb-4">Mis Pedidos</h2>
      <ul class="text-blue-700">
        <a href="">
          <li class="py-1  hover:text-blue-800 block max-w-max" >Ver historial de compra</li>
        </a>
        <a href="/cart">
          <li class="py-1 hover:text-blue-800 block max-w-max">Ver carrito de compras</li>
        </a>
      </ul>
    </div>
    <div class="bg-white rounded-lg p-4 shadow-md">
      <h2 class="text-2xl text-slate-800 font-medium mb-4">Contáctanos</h2>
      <ul>
        <li class="py-1  hover:text-blue-700 block max-w-max">
          <a title="Facebook" href="https://www.facebook.com/profile.php?id=61553058448723" target="_blank">
            <i class="fab fa-facebook-square text-blue-700"></i> Facebook
          </a>
        </li>
        <li class="py-1  hover:text-red-500 block max-w-max">
          <a title="Gmail" href="https://mail.google.com/mail/u/2/#inbox" target="_blank">
            <i class="fa-brands fa-google text-red-500"></i> Gmail
          </a>
        </li>
        <li class="py-1  hover:text-pink-600 block max-w-max">
          <a title="Instagram" href="https://www.instagram.com/ganaderiaelinfiernooficial/" target="_blank">
            <i class="fab fa-instagram-square text-pink-600"></i> Instagram
          </a>
        </li>
      </ul>
    </div>
    <div class="p-4  md:col-span-3 flex items-center justify-center">
      <button class="py-2 px-4 bg-slate-500 text-white rounded-md hover:bg-slate-700">
        Cerrar Sesión
      </button>
    </div>
  </div>
  )
}