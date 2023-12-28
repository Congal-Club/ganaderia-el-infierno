import { type APIRoute } from 'astro'
import { users } from '../../data/users'
import type { User } from '../../types/user'

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()

  const name = data.get('name')
  const lastname = data.get('lastname')
  const userName = data.get('user-name')
  const email = data.get('email')
  const password = data.get('password')
  const confirmPassword = data.get('confirm-password')

  if (password !== confirmPassword) {
    return new Response(null, { status: 401 })
  }

  const user: User = {
    id: users.length + 1,
    name: name as string,
    email: email as string,
    last_name: lastname as string,
    password: password as string,
    picture: 'https://i.pinimg.com/564x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg',
    role: 'user',
    user_name: userName as string
  }

  return user 
    ? new Response(JSON.stringify(user))
    : new Response(null, { status: 401 })
}
