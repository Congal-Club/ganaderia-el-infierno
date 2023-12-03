import {useEffect, useState} from "react"; 
import { Facebook, Gmail, Instagram} from "./icons/Socials"

export default function ProfileUser() {

  const [user,setUser] = useState({name:"Manuel", lastName:"Alvarado",email:"manualvaradoibarr@gmail.com",address:"Misión de Santa Lucía. San Justino de Orona Madrigal #148"}); 
  const [userIsLogged, setUserIsLogged] = useState(false); 

  useEffect(() => {
    const userFromStorage = window.localStorage.getItem('user'); 

    if(userFromStorage){
      setUser({
        name: userFromStorage.name??"Manuel", 
        lastName: userFromStorage.lastname??"Alvarado", 
        email: userFromStorage.email??"manualvaradoibarr@gmail.com", 
        address: userFromStorage.address??"Misión de Santa Lucía. San Justino de Orona Madrigal #148"
      })
      
      setUserIsLogged(true)
    }
  },[]); 

  return (
    <div>
      {userIsLogged?(
        <div className="p-2">
        <h2 className="text-lg font-semibold mb-2">Nombre: {user.name} </h2>
        <h2 className="text-lg font-semibold mb-2">Apellido: {user.lastName}</h2>
        <h2 className="text-lg font-semibold mb-2">Correo Electrónico: {user.email}</h2>
        <h2 className="text-lg font-semibold mb-2">Dirección: {user.address}</h2>
        </div>
      ):(
        <div className="p-2">
          <h2 className="text-lg font-semibold mb-2">Aun no ha iniciado sesion </h2>
        </div>
      )}
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-2xl text-slate-800 font-medium mb-4">
            Mi Cuenta
          </h2>
          <ul className="text-blue-600">
          {userIsLogged?(
            <>
              <a href="/modify-account">
                <li className="py-1 hover:text-blue-800 block max-w-max">
                  Editar la información de la cuenta
                </li>
              </a>
              <a href="/change-password">
                <li className="py-1  hover:text-blue-800 block max-w-max">
                  Cambiar tu contraseña
                </li>
              </a>
              <a href="/wish-list">
                <li className="py-1  hover:text-blue-800 block max-w-max">
                  Modificar tu lista de deseos
                </li>
              </a>
            </>
          ):(
            <>
              <a href="/login">
                <li className="py-1  hover:text-blue-800 block max-w-max">
                  Iniciar sesión
                </li>
              </a>
              <a href="/register">
                <li className="py-1  hover:text-blue-800 block max-w-max">
                  Registrarse
                </li>
              </a>
            </>
          )}
          </ul>
        </div>
        {userIsLogged&&(
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-2xl text-slate-800 font-medium mb-4">
              Mis Pedidos
            </h2>
            <ul className="text-blue-700">
              <a href="/history">
                <li className="py-1  hover:text-blue-800 block max-w-max">
                  Ver historial de compra
                </li>
              </a>
              <a href="/cart">
                <li className="py-1 hover:text-blue-800 block max-w-max">
                  Ver carrito de compras
                </li>
              </a>
            </ul>
          </div>
        )}
        
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-2xl text-slate-800 font-medium mb-4">
            Contáctanos
          </h2>
          <ul>
            <li className="py-1  hover:text-blue-700 block max-w-max">
              <a
                title="Facebook"
                href="https://www.facebook.com/profile.php?id=61553058448723"
                target="_blank"
                className="text-blue-700  flex gap-1"
              >
                <Facebook/> Facebook
              </a>
            </li>
            <li className="py-1  hover:text-red-500 block max-w-max">
              <a
                title="Gmail"
                href="https://mail.google.com/mail/u/2/#inbox"
                target="_blank"
                className="text-red-500 flex gap-1"
              >
                <Gmail/> Gmail
              </a>
            </li>
            <li className="py-1  hover:text-pink-600 block max-w-max">
              <a
                title="Instagram"
                href="https://www.instagram.com/ganaderiaelinfierno/"
                target="_blank"
                className="text-pink-600 flex gap-1"
              >
                <Instagram/> Instagram
              </a>
            </li>
          </ul>
        </div>
        {userIsLogged&&(
          <div className="p-4  md:col-span-3 flex items-center justify-center">
            <button className="py-2 px-4 bg-slate-500 text-white rounded-md hover:bg-slate-700">
              Cerrar Sesión
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
