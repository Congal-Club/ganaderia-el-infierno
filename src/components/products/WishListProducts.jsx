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
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" strokeWidth="0" fill="currentColor" /></svg>
                  </button>
                  </a>
                  <button 
                    className="py-2 px-4 m-2 bg-red-700 text-white rounded-md hover:bg-red-900"
                    onClick={()=>removeFromWishlist(product.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
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
