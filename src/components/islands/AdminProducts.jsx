import { useState } from "react"
import FormProducts from "./FormProducts"
import TableOfProducts from "./TableOfProducts"

export default function AdminProducts({ products }) {
  const [adminProducts, setAdminProducts] = useState(products)
  const [activeProduct, setActiveProduct] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleAddProduct = (product) => {
    setAdminProducts([...adminProducts, product])
  }

  const handleEditProduct = (product) => {
    setAdminProducts(
      adminProducts.map((p) => (p.id === product.id ? product : p))
    )

    setIsEditing(false)
    setActiveProduct(null)
  }

  const handleDeleteProduct = (id) => {
    setAdminProducts(adminProducts.filter((p) => p.id !== id))
  }

  return (
    <div className="w-full flex flex-row justify-between items-start gap-4">
      <FormProducts
        activeProduct={activeProduct}
        isEditing={isEditing}
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
      />

      <TableOfProducts
        products={adminProducts}
        onClickProduct={(p) => {
          setActiveProduct(p)
          setIsEditing(true)
        }}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  )
}
