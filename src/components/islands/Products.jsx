import { Product } from '../../types/products'
import { products } from '../../data/db'

export default function Products(){
  
  return(
    <section>
      <h2 class="text-2xl font-semibold text-slate-700 mb-6">
        Productos destacados
      </h2>
      <div class="mb-4">
        <label>Ordenar por</label>
        <select name="filterMenu" id="filterMenu">
          <option>Seleccionar...</option>
          <option value="Alphabet Asc">Alfabeticamente de manera ascendente</option>
          <option value="Alphabet Desc">Alfabeticamente de manera descendente</option>
          <option value="Price H-L">Precio alto-bajo</option>
          <option value="Price L-H">Precio bajo-alto</option>
        </select>
      </div>
      {products.map((product) =>(
        <p key={product.id}>{product.name}</p>
      ))}


      <section class="w-full flex justify-start items-start gap-6 flex-wrap">
      
    
  </section>
    </section>
  )
}