import { PayPalButtons as ReactPayPal } from '@paypal/react-paypal-js'
import toast from 'react-hot-toast'

export default function PayPalButtons({ total, clearProducts }) {
  return (
    <ReactPayPal
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: total
              }
            }
          ]
        })
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)

        clearProducts()
        
        toast.success('Compra realizada con éxito', {
          duration: 5000,
          position: 'bottom-right',
        })
      }}
    />
  )
}
