import { type APIRoute } from 'astro'
import { users } from '../../data/users'

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()

  const from = data.get('from')
  const email = data.get('email')
  const password = data.get('password')

  const user = users.find((u) => {
    return from === 'admin'
      ? u.email === email && u.password === password && u.role === 'admin'
      : u.email === email && u.password === password
  })

  return user ?
    new Response(JSON.stringify(user))
    : new Response(null, { status: 401 })
}
