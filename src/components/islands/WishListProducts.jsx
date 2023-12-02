import { useState, useEffect } from "react";

export default function WishListProducts() {
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    const wishListInStorage = localStorage.getItem("wishlist");

    if (wishListInStorage) {
      const wishlistStored = JSON.parse(wishListInStorage);
      setWishList(wishlistStored);
    } else {
      setWishList([]);
    }
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((product) => product.id !== productId);
    setWishList(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <section className="flex-1 flex flex-col gap-2">
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Modelo</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "4rem" }}
                  />
                </td>
                <td>
                  <p>{product.name}</p>
                </td>
                <td>
                  <p>{product.model}</p>
                </td>
                <td>
                  <p>{product.stock}</p>
                </td>
                <td>
                  <p>{product.price}</p>
                </td>
                <td>
                  <a href={`/products/${product.slug}`}>
                  <button className="py-2 px-4 m-2 bg-slate-500 text-white rounded-md hover:bg-slate-700">
                  <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                  </a>
                  <button 
                    className="py-2 px-4 m-2 bg-red-700 text-white rounded-md hover:bg-red-900"
                    onClick={()=>removeFromWishlist(product.id)}>
                  <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <style>
        {`
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }

          th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
          }

          th {
            background-color: #f2f2f2;
            font-weight: bold;
          }

          img {
            max-width: 100%;
            height: auto;
          }
        `}
      </style>
    </div>
  );
}
