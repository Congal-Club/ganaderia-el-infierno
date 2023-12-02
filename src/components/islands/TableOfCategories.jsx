import Pencil from "./icons/Pencil"
import Trash from "./icons/Trash"

export default function TableOfCategories({ categories, onClickCategory, onDeleteCategory }) {
  return (
    <div className="flex-1 [&>*:nth-child(even)]:bg-gray-200">
      {categories.map((category) => (
        <article
          key={category.id}
          className="w-full p-2 mb-2 rounded-md"
        >
          <div>
            <h3 className="text-xl font-medium">
              {category.name}
            </h3>

            <p className="text-gray-800 mb-2">
              {category.description}
            </p>

            <div className="flex flex-row justify-start items-center gap-4">
              <button
                className="flex justify-center gap-2 py-1 px-3 bg-orange-500 text-white w-32 rounded-md shadow-md font-semibold"
                onClick={() => onClickCategory(category)}
              >
                Editar{' '}
                <Pencil />
              </button>
              
              <button
                className="flex justify-center gap-2 py-1 px-3 bg-red-600 text-white w-32 rounded-md shadow-md font-semibold"
                onClick={() => onDeleteCategory(category.id)}
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
