import Plus from "./icons/Plus"
import Pencil from "./icons/Pencil"
export default function FormUsers({ activeUser, isEditing, onAddUser, onEditUser }){
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const user = Object.fromEntries(data)

    const userFormatted = {
      id: isEditing ? activeUser.id : Date.now(),
      email: user.email,
      last_name: user.last_name,
      name: user.name,
      role: user.role,
      password: user.password,
      user_name: user.user_name
    }

    isEditing ? onEditUser(userFormatted) : onAddUser(userFormatted)
    e.target.reset()
  }

  return (
    <form className="w-1/3 bg-white shadow-lg rounded-md p-2 mb-4" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-0.5 items-start my-3">
        <label htmlFor="email" className="text-sm font-medium">
          Email del usuario
        </label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          defaultValue={activeUser?.email}
          className="w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none"
        />
      </div>
      <div className="w-full flex flex-col gap-0.5 items-start my-3">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre
        </label>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre..."
          defaultValue={activeUser?.name}
          className="w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none"
        />
      </div>
      <div className="w-full flex flex-col gap-0.5 items-start my-3">
        <label htmlFor="last_name" className="text-sm font-medium">
          Apellidos
        </label>

        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Apellidos..."
          defaultValue={activeUser?.last_name}
          className="w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none"
        />
      </div>
      
      <div className="w-full flex flex-col gap-0.5 items-start my-3">
        <label htmlFor="role" className="text-sm font-medium">
          Role
        </label>

        <select
          type="text"
          name="role"
          id="role"
          placeholder="Role..."
          defaultValue={activeUser?.role}
          className="w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none"
        >
          <option value="user">
            Usuario            
          </option>
          <option value="admin">
            Administrador
          </option>
        </select>
      </div>
      <div className="w-full flex flex-col gap-0.5 items-start my-3">
        <label htmlFor="password" className="text-sm font-medium">
          Contraseña
        </label>

        <input
          type="text"
          name="password"
          id="password"
          placeholder="Contraseña..."
          defaultValue={activeUser?.password}
          className="w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none"
        />
      </div>
      <div className="w-full flex flex-col gap-0.5 items-start my-3">
        <label htmlFor="user_name" className="text-sm font-medium">
          Nombre de usuario
        </label>

        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="Nombre de usuario..."
          defaultValue={activeUser?.user_name}
          className="w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none"
        />
      </div>

      <button
        type="submit"
        className="flex flex-row gap-2 justify-center bg-blue-600 py-1 px-4 mb-2 w-full text-center rounded-md text-white shadow-sm"
      >
        <span>
          {isEditing ? 'Editar Categoría ' : 'Agregar Categoría '}
        </span>
        
        {isEditing ? <Pencil /> : <Plus />}
      </button>
    </form>
  )
}