import { products } from "../../data/db"

const product1 = products[0]
console.log(product1)
export default function OrderDatails(){
  return(
    <div>
      <h2 class="text-3xl"><b>Detalles del pedido</b></h2>
        <h3 class="text-xl">Pedido</h3>
        <div class="m-auto flex flex-row justify-between text-lg text-left mt-3 mb-5">
          <div class="ml-5  ">
            <p><b>ID del pedido: </b> 2</p>
            <p><b>Estatus: </b> Pendiente</p>
            
          </div>
          <div class="mr-5">
            <table>
              <tr class="border rounded-md border-slate-400 text-left">
                <th class="border rounded-md border-slate-400 pr-12 pl-2">Metodo de envio</th>
                <td class="border rounded-md border-slate-400 pr-12 pl-2">Tarifa Plana de Envio</td>
              </tr>
              <tr class="border rounded-md border-slate-400">
                <th class="border rounded-md border-slate-400 pr-12 pl-2">Metodo de pago</th>
                <td class="border rounded-md border-slate-400 pr-12 pl-2">Contra Reembolso</td>
              </tr>
              <tr class="border rounded-md border-slate-400">
                <th class="border rounded-md border-slate-400 pr-12 pl-2">Fecha de creación</th>
                <td class="border rounded-md border-slate-400 pr-12 pl-2">2023-11-29</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="border   border-slate-400 mb-8">
          <div class="border-2  border-slate-600 text-2xl">
            <b class="ml-2">Dirección</b>
          </div>
          <div class="ml-5 text-base">
            <p> <b>Nombre:</b> Hector Garcia</p>
            <p> <b>Colonia:</b> Valle de los cactus</p>
            <p> <b>Calle:</b> Recinto pitajaya</p>
            <p> <b>Numero interior:</b> 48</p>
            <p> <b>Numero exterior:</b> 605</p>
            <p>Aguascalientes, Aguascaliente 20196</p>
            <p>México</p>

          </div>
        </div>

        <div class="mb-5">
          <table class="border rounded-md border-slate-400 text-base text-center">
            <tr class="border rounded-md border-slate-400">
              <th class="border rounded-md border-slate-400 pl-3 pr-3">Nombre del producto</th>
              <th class="border rounded-md border-slate-400 pl-10 pr-10">Modelo</th>
              <th class="border rounded-md border-slate-400 pl-5 pr-5">Cantidad</th>
              <th class="border rounded-md border-slate-400 pl-5 pr-5">Precio</th>
              <th class="border rounded-md border-slate-400 pl-5 pr-5">Total</th>
            </tr>

            <tr key={product1.id}>
              <td class="border rounded-md border-slate-400 pl-5 pr-5">{product1.name}</td>
              <td class="border rounded-md border-slate-400 pl-5 pr-5">{product1.model}</td>
              <td class="border rounded-md border-slate-400 pl-5 pr-5">2</td>
              <td class="border rounded-md border-slate-400" >${product1.price}</td>
              <td class="border rounded-md border-slate-400">${product1.price * 2}</td>

            </tr>
          </table>
        </div>
        <b>Historial del pedido</b>
        <div class="mt-3 mb-5">
          <table class="border rounded-md border-slate-400 text-base text-center">
            <tr class="border rounded-md border-slate-400">
              <th class="border rounded-md border-slate-400 pr-5 pl-5">Fecha de creación</th>
              <th class="border rounded-md border-slate-400 pr-5 pl-5">Comentarios</th>
              <th class="border rounded-md border-slate-400 pr-5 pl-5">Estatus</th>
            </tr>

            <tr>
              <td class="border rounded-md border-slate-400">2023-11-29</td>
              <td class="border rounded-md border-slate-400"></td>
              <td class="border rounded-md border-slate-400">Pendiente</td>

            </tr>
          </table>
        </div>
    </div>
  )
}