import { useState } from "react"
import FormCategories from "./FormCategories"
import TableOfCategories from "./TableOfCategories"

export default function AdminCategories({ categories }) {
  const [adminCategories, setAdminCategories] = useState(categories)
  const [activeCategory, setActiveCategory] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleAddCategory = (category) => {
    setAdminCategories([...adminCategories, category])
  }

  const handleEditCategory = (category) => {
    setAdminCategories(
      adminCategories.map((c) => (c.id === category.id ? category : c))
    )

    setIsEditing(false)
    setActiveCategory(null)
  }

  const handleDeleteCategory = (id) => {
    setAdminCategories(adminCategories.filter((c) => c.id !== id))
  }

  return (
    <div className="w-full flex flex-row justify-between items-start gap-4">
      <FormCategories
        activeCategory={activeCategory}
        isEditing={isEditing}
        onAddCategory={handleAddCategory}
        onEditCategory={handleEditCategory}
      />

      <TableOfCategories
        categories={adminCategories}
        onClickCategory={(c) => {
          setActiveCategory(c)
          setIsEditing(true)
        }}
        onDeleteCategory={handleDeleteCategory}
      />
    </div>
  )
}
