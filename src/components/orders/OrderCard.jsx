export default function OrderCard({id, nameClient, quantity, status,total, date}){
  return(
    <tr>
          <td className="border rounded-md border-slate-400 p-2">{id}</td>
          <td className="border rounded-md border-slate-400">{nameClient}</td>
          <td className="border rounded-md border-slate-400">{quantity}</td>
          <td className="border rounded-md border-slate-400">Estatus: {status}</td>
          <td className="border rounded-md border-slate-400">${total}</td>
          <td className="border rounded-md border-slate-400">{date}</td>
          <td className="border rounded-md border-slate-400 text-blue-800 underline">
            <a  href={`/orders/${id}`}><b>Ver</b></a>
          </td>
      </tr>
  )
}