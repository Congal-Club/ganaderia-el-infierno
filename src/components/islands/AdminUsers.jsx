import { useState } from "react"
import FormUsers from "./FormUsers"
import TableOfUsers from "./TableOfUsers"
export default function AdminUsers({users}){
  const [adminUsers, setAdminUsers] = useState(users)
  const [activeUser, setActiveUser] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleAddUser = (user) => {
    setAdminUsers([...adminUsers, user])
  }

  const handleEditUser = (user) => {
    setAdminUsers(
      adminUsers.map((c) => (c.id === user.id ? user : c))
    )

    setIsEditing(false)
    setActiveUser(null)
  }

  const handleDeleteUser = (id) => {
    setAdminUsers(adminUsers.filter((c) => c.id !== id))
  }
  return(
    <div className="w-full flex flex-row justify-between items-start gap-4">
      <FormUsers
        activeUser={activeUser}
        isEditing={isEditing}
        onAddUser={handleAddUser}
        onEditUser={handleEditUser}
      />
      <TableOfUsers
        users={adminUsers}
        onClickUser={(c) => {
          setActiveUser(c)
          setIsEditing(true)
        }}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  )
}