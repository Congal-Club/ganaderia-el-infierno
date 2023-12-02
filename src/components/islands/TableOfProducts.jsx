import Pencil from "./icons/Pencil"
import Trash from "./icons/Trash"

export default function TableOfProducts({ products, onClickProduct, onDeleteProduct }) {
  return (
    <div className="flex-1 [&>*:nth-child(odd)]:bg-gray-200">
      {products.map((product) => (
        <article
          key={product.id}
          className="w-full flex gap-4 justify-between items-center p-2 mb-2 rounded-md"
        >
          <figure>
            <img
              src={product.image}
              alt={product.name}
              className="w-28 aspect-[12/9] object-cover rounded-md"
            />
          </figure>

          <div className="flex-1">
            <h3 className="text-xl font-medium">
              {product.name}
            </h3>

            <p className="text-gray-800 mb-2">
              {product['short-description']}
            </p>

            <p className="text-3xl font-semibold text-gray-600 mb-2">
              ${product.price}
            </p>

            <p className="text-base font-medium mb-2">
              En stock:{' '}
              <span className={`font-bold ${product.stock <= 20 ? 'text-red-600' : 'text-green-600'}`}>
                {product.stock}
              </span>
            </p>

            <div className="flex flex-row justify-start items-center gap-4">
              <button
                className="flex justify-center gap-2 py-1 px-3 bg-orange-500 text-white w-32 rounded-md shadow-md font-semibold"
                onClick={() => onClickProduct(product)}
              >
                Editar{' '}
                <Pencil />
              </button>
              
              <button
                className="flex justify-center gap-2 py-1 px-3 bg-red-600 text-white w-32 rounded-md shadow-md font-semibold"
                onClick={() => onDeleteProduct(product.id)}
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
