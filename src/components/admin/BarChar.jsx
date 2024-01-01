import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'

export default function BarChar({ orders }) {
  const data = orders.reduce((acc, order) => {
    order.products.forEach(({ product, quantity }) => {
      const productName = product.name
      acc[productName] = (acc[productName] || 0) + quantity
    })
    
    return acc
  }, {})

  const chartData = Object.keys(data).map((productName) => ({
    name: productName,
    sales: data[productName]
  }))

  return (
    <div className='w-full mt-12'>
      <h1 className='mb-4 text-xl font-medium'>
        Gráfica de ventas
      </h1>

      <BarChart width={900} height={400} data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='sales' fill='#003049' />
      </BarChart>
    </div>
  )
}
