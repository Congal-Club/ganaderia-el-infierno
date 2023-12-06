import Pencil from "./icons/Pencil"
import Trash from "./icons/Trash"

export default function TableOfUsers({ users, onClickUser, onDeleteUser }){
  return(
    <div className="flex-1 [&>*:nth-child(even)]:bg-gray-200">
      {users.map((user) => (
        <article
          key={user.id}
          className="w-full p-2 mb-2 rounded-md"
        >
          <div>
            <h3 className="text-xl font-medium">
              {user.last_name} {' '}
              {user.name} 
            </h3>

            <p className="text-gray-800 mb-2">
              <span className="font-bold">Nombre de usuario: </span> {user.user_name}
            </p>
            <p className="text-gray-800 mb-2">
              <span className="font-bold">Email: </span> {user.email}
            </p>
            <p className="text-gray-800 mb-2">
              <span className="font-bold">Role: </span> {user.role}
            </p>

            <div className="flex flex-row justify-start items-center gap-4">
              <button
                className="flex justify-center gap-2 py-1 px-3 bg-orange-500 text-white w-32 rounded-md shadow-md font-semibold"
                onClick={() => onClickUser(user)}
              >
                Editar{' '}
                <Pencil />
              </button>
              
              <button
                className="flex justify-center gap-2 py-1 px-3 bg-red-600 text-white w-32 rounded-md shadow-md font-semibold"
                onClick={() => onDeleteUser(user.id)}
              >
                Eliminar{' '}
                <Trash />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}