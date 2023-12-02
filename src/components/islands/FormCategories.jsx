import Plus from "./icons/Plus"
import Pencil from "./icons/Pencil"

export default function FormCategories({ activeCategory, isEditing, onAddCategory, onEditCategory }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const category = Object.fromEntries(data)

    const categoryFormatted = {
      id: isEditing ? activeCategory.id : Date.now(),
      slug: category.name.toLowerCase().replaceAll(' ', '-'),
      description: category.description,
      name: category.name
    }

    isEditing ? onEditCategory(categoryFormatted) : onAddCategory(categoryFormatted)
    e.target.reset()
  }

  return (
    <form className="w-1/3 bg-white shadow-lg rounded-md p-2 mb-4" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-0.5 items-start my-3">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre de la categoría
        </label>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre..."
          defaultValue={activeCategory?.name}
          className="w-full py-1 px-2 border-2 border-gray-300 rounded-md outline-none"
        />
      </div>

      <div className="w-full flex flex-col gap-0.5 items-start my-3">
        <label htmlFor="description" className="text-sm font-medium">
          Descripción completa
        </label>

        <textarea
          name="description"
          id="description"
          placeholder="Descripción..."
          rows={5}
          defaultValue={activeCategory ? activeCategory.description : ''}
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
