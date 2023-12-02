import { orders } from "../../data/db"
import OrderCard from "./OrderCard"


export default function Orders(){
  return (
    <>
      <div>
        <p className="text-2xl mb-5">Ordenes de compra</p>
      </div>
      <table className="border rounded-md border-slate-400 text-base text-center m-auto">
        <tr className="border rounded-md border-slate-400 bg-[#f2f2f2]">
          <th className="border rounded-md border-slate-400 pl-3 pr-3">ID del Pedido</th>
          <th className="border rounded-md border-slate-400 pl-10 pr-10">Cliente</th>
          <th className="border rounded-md border-slate-400 pl-3 pr-3">N° de Productos</th>
          <th className="border rounded-md border-slate-400 pl-20 pr-20">Estado</th>
          <th className="border rounded-md border-slate-400 pl-10 pr-10">Total</th>
          <th className="border rounded-md border-slate-400 pl-5 pr-5">Fecha de creación</th>
          <th className="border rounded-md border-slate-400 pl-10 pr-10">    </th>

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