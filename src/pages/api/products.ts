import { type APIRoute } from 'astro'
import { products } from '../../data/products'

export const GET: APIRoute = async ({}) => {
  const allProducts = products
  
  return new Response(JSON.stringify(allProducts), {
    status: 200,
    statusText: 'OK'
  })
}
