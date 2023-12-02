import Product from "./Product";
import {useState} from "react"

export default function Products({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleChange = (e) =>{
    const value = e.target.value
    switch(value){
      case 'A-Z':{
        setFilteredProducts(
          filteredProducts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(p => p)
          )
          break
      }
      case 'Z-A':{
        setFilteredProducts(
          filteredProducts
            .sort((a, b) => b.name.localeCompare(a.name))
            .map(p => p)
          )
          break
      }
      case 'HtoL':{
        setFilteredProducts(
          filteredProducts
            .sort((a, b) => b.price - a.price)
            .map(p => p)
          )
          break
      }
      case 'LtoH':{
        setFilteredProducts(
          filteredProducts
            .sort((a, b) => a.price - b.price)
            .map(p => p)
          )
          break
      }
    }
  }

  return (
    <section className="w-[95%] mx-auto md:w-full">
      <h2 className="text-2xl font-semibold text-slate-700 mb-6">
        Productos destacados
      </h2>

      <div className="mb-4 flex justify-start items-center gap-2">
        <label className="font-medium">Ordenar por</label>
        <select className="py-2 px-4 border border-gray-300 rounded-md" name="filterMenu" id="filterMenu" onChange={handleChange}>
          <option value='default'>Seleccionar...</option>
          <option value="A-Z">
            Alfabeticamente de manera ascendente
          </option>
          <option value="Z-A">
            Alfabeticamente de manera descendente
          </option>
          <option value="HtoL">
            Precio alto-bajo
          </option>
          <option value="LtoH">
            Precio bajo-alto
          </option>
        </select>
      </div>

      <section className="w-full flex justify-start items-start gap-3 lg:gap-6 flex-wrap">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
}
