export interface User {
  id: number
  name: string
  user_name: string
  email: string
  last_name: string
  picture: string
  password: string
  role: 'admin' | 'user'
}
