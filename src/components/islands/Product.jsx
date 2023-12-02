export default function Product({ product }) {
  return (
    <article className="sm:w-full md:w-[47%] lg:w-[23%] border rounded-md border-slate-400 overflow-hidden shadow-lg">
      <a title={product.name} href={`/products/${product.slug}`}>
        <header>
          <img
            src={product.image}
            alt={product.name}
            title={product.name}
            className="object-cover object-center h-60"
          />
        </header>

        <main className="p-3">
          <h3 className="text-lg text-slate-700 font-semibold">
            {product.name.length < 25
              ? product.name
              : product.name.slice(0, 25) + "..."}
          </h3>
          <p className="text-base text-gray-700 mt-2 description">
            {product["short-description"].length < 80
              ? product["short-description"]
              : product["short-description"].slice(0, 80) + "..."}
          </p>

          <p className="mt-4 font-bold text-gray-600 text-lg">${product.price}</p>
        </main>
      </a>
    </article>
  );
}
