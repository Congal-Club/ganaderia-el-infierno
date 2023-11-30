import { orders } from "../../data/db"
import OrderCard from "./OrderCard"


export default function Orders(){
  return (
    <>
      <div>
        <p className="text-2xl mb-5">Ordenes de compra</p>
      </div>
      <table className="border rounded-md border-slate-400 text-base text-center m-auto">
        <tr className="border rounded-md border-slate-400">
          <td className="border rounded-md border-slate-400 pl-3 pr-3">ID del Pedido</td>
          <td className="border rounded-md border-slate-400 pl-10 pr-10">Cliente</td>
          <td className="border rounded-md border-slate-400 pl-3 pr-3">N° de Productos</td>
          <td className="border rounded-md border-slate-400 pl-20 pr-20">Estado</td>
          <td className="border rounded-md border-slate-400 pl-10 pr-10">Total</td>
          <td className="border rounded-md border-slate-400 pl-5 pr-5">Fecha de creación</td>
          <td className="border rounded-md border-slate-400 pl-10 pr-10">    </td>

        </tr>

        {orders.map((order) => (
          <OrderCard
            key={order.id}
            id={order.id}
            nameClient={order.nameClient}
            quantity={order.numProducts}
            status={order.status}
            total={order.total}
            date={order.date}
          />
        ))}
      </table>
      

     
    </>
  )
}