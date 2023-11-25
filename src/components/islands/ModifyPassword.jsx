export default function ModifyPassword(){
  return (
    <div>
      <h2 class="text-2xl text-slate-800 mb-4">Tu contraseña</h2>
      <hr />
      <div>
        <form class=" px-8 pt-6 mb-4 ">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              <div class="flex items-center">
                <p class="text-red-500">*</p>
                <p class="ml-2">Contraseña</p>
              </div>
            </label>
            <input
              class="border rounded w-[50%] py-2 px-3 text-gray-700  focus:outline-none "
              id="password"
              type="password"
              required
              placeholder="Contraseña"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="cPassword"
            >
              <div class="flex items-center">
                <p class="text-red-500">*</p>
                <p class="ml-2">Confirmar Contraseña</p>
              </div>
            </label>
            <input
              class="border rounded w-[50%] py-2 px-3 text-gray-700  focus:outline-none "
              id="cPassword"
              type="password"
              required
              placeholder="Confirmar Contraseña"
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
  )
}