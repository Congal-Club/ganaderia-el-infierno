export default function ModifyProfile() {
  return (
    <div>
      <h2 class="text-2xl text-slate-800 mb-4">Tus datos personales</h2>
      <hr />
      <div>
        <form class=" px-8 pt-6 mb-4 ">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="userName"
            >
              <div class="flex items-center">
                <p class="text-red-500">*</p>
                <p class="ml-2">Nombre</p>
              </div>
            </label>
            <input
              class="border rounded w-[50%] py-2 px-3 text-gray-700  focus:outline-none "
              id="userName"
              type="text"
              required
              placeholder="Nombre"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="lastName"
            >
              <div class="flex items-center">
                <p class="text-red-500">*</p>
                <p class="ml-2">Apellido</p>
              </div>
            </label>
            <input
              class="border rounded w-[50%] py-2 px-3 text-gray-700  focus:outline-none "
              id="lastName"
              type="text"
              required
              placeholder="Apellido"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              <div class="flex items-center">
                <p class="text-red-500">*</p>
                <p class="ml-2">Correo Electrónico</p>
              </div>
            </label>
            <input
              class="border rounded w-[50%] py-2 px-3 text-gray-700  focus:outline-none "
              id="email"
              type="email"
              required
              placeholder="Correo Electrónico"
            />
          </div>
          <div class="flex justify-between mt-2">
            <a href="/account">
            <button class="py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Regresar
            </button>
            </a>
            <button class="py-2 px-4 bg-slate-500 text-white rounded-md hover:bg-slate-700">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
