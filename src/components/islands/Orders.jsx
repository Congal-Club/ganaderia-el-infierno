export default function Orders(){
  return (
    <>
      <div>
        Ordenes de compra
      </div>
      <table class="border rounded-md border-slate-400 text-base">
        <tr class="border rounded-md border-slate-400">
          <td class="border rounded-md border-slate-400">ID del Pedido</td>
          <td class="border rounded-md border-slate-400">Cliente</td>
          <td class="border rounded-md border-slate-400">N° de Productos</td>
          <td class="border rounded-md border-slate-400">Estado</td>
          <td class="border rounded-md border-slate-400">Total</td>
          <td class="border rounded-md border-slate-400">Fecha de creación</td>
          <td class="border rounded-md border-slate-400">    </td>

        </tr>

        <tr>
          <td class="border rounded-md border-slate-400">1</td>
          <td class="border rounded-md border-slate-400">Hector Garcia</td>
          <td class="border rounded-md border-slate-400">2</td>
          <td class="border rounded-md border-slate-400">Estatus: pendiente</td>
          <td class="border rounded-md border-slate-400">$400.00</td>
          <td class="border rounded-md border-slate-400">2023-11-28</td>
          <td class="border rounded-md border-slate-400">
            <a  href={`/products/`}>Ver</a>
          </td>

        </tr>
      </table>

      <div>
        Pedido
        <div class="m-auto flex flex-row justify-between text-sm">
          <div class="ml-5">
            <table>
              <tr>
                <th>ID del pedido</th>
                <td>2</td>
              </tr>
              <tr>
                <th>Estatus:</th>
                <td>Pendiente</td>
              </tr>
            </table>
          </div>
          <div class="mr-5">
            <table>
              <tr>
                <th>Metodo de envio</th>
                <td>2</td>
              </tr>
              <tr>
                <th>Metodo de pago</th>
                <td>Pendiente</td>
              </tr>
              <tr>
                <th>Fecha de creación</th>
                <td>2023-11-29</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="border rounded-md border-slate-400">
          <div class="border rounded-md border-slate-400 text-2xl">
            Dirección
          </div>
          <div class="text-lg">
            <p>Nombre: Hector Garcia</p>
            <p>Colonia: Valle de los cactus</p>
            <p>Calle: Recinto pitajaya</p>
            <p>Numero interior:48</p>
            <p>Numero exterior:605</p>
            <p>Aguascalientes, Aguascaliente 20196</p>
            <p>México</p>

          </div>
        </div>

        <div>
          <table class="border rounded-md border-slate-400 text-base">
            <tr class="border rounded-md border-slate-400">
              <td class="border rounded-md border-slate-400">Nombre del producto</td>
              <td class="border rounded-md border-slate-400">Modelo</td>
              <td class="border rounded-md border-slate-400">Cantidad</td>
              <td class="border rounded-md border-slate-400">Precio</td>
              <td class="border rounded-md border-slate-400">Total</td>
            </tr>

            <tr>
              <td class="border rounded-md border-slate-400">1</td>
              <td class="border rounded-md border-slate-400">Hector Garcia</td>
              <td class="border rounded-md border-slate-400">2</td>
              <td class="border rounded-md border-slate-400">Estatus: pendiente</td>
              <td class="border rounded-md border-slate-400">$400.00</td>

            </tr>
          </table>
        </div>
        Historial del pedido
        <div>
          <table class="border rounded-md border-slate-400 text-base">
            <tr class="border rounded-md border-slate-400">
              <td class="border rounded-md border-slate-400">Fecha de creación</td>
              <td class="border rounded-md border-slate-400">Comentarios</td>
              <td class="border rounded-md border-slate-400">Estatus</td>
            </tr>

            <tr>
              <td class="border rounded-md border-slate-400">2023-11-29</td>
              <td class="border rounded-md border-slate-400"></td>
              <td class="border rounded-md border-slate-400">Pendiente</td>

            </tr>
          </table>
        </div>
      </div>
    </>
  )
}