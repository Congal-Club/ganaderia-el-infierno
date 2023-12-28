export default function ModifyProfile() {
  return (
    <div>
      <h2 className="text-2xl text-slate-800 mb-4">Tus datos personales</h2>
      <hr />
      <div>
        <form className=" px-8 pt-6 mb-4 ">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userName"
            >
              <div className="flex items-center">
                <p className="text-red-500">*</p>
                <p className="ml-2">Nombre</p>
              </div>
            </label>
            <input
              className="border rounded w-[50%] py-2 px-3 text-gray-700  focus:outline-none "
              id="userName"
              type="text"
              required
              placeholder="Nombre"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              <div className="flex items-center">
                <p className="text-red-500">*</p>
                <p className="ml-2">Apellido</p>
              </div>
            </label>
            <input
              className="border rounded w-[50%] py-2 px-3 text-gray-700  focus:outline-none "
              id="lastName"
              type="text"
              required
              placeholder="Apellido"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              <div className="flex items-center">
                <p className="text-red-500">*</p>
                <p className="ml-2">Correo Electrónico</p>
              </div>
            </label>
            <input
              className="border rounded w-[50%] py-2 px-3 text-gray-700  focus:outline-none "
              id="email"
              type="email"
              required
              placeholder="Correo Electrónico"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              <div className="flex items-center">
                <p className="text-red-500">*</p>
                <p className="ml-2">Dirección</p>
              </div>
            </label>
            <input
              className="border rounded w-[50%] py-2 px-3 text-gray-700  focus:outline-none "
              id="address"
              type="text"
              required
              placeholder="Dirección"
            />
          </div>
          <div className="flex justify-between mt-2">
            <a href="/account">
            <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Regresar
            </button>
            </a>
            <button className="py-2 px-4 bg-slate-500 text-white rounded-md hover:bg-slate-700">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
