import { useState } from "react"

export default function AddToCart({ id, stock }) {
    const [quantity, setQuantity] = useState(0)

    return (
        <section className="w-full flex justify-between gap-4 mt-6 mb-6 items-center">
            <div className="flex justify-start items-center gap-3">
                <button
                    className="p-2 bg-slate-700 text-white rounded-full shadow-sm"
                    onClick={() => {
                        if (quantity > 0) {
                            setQuantity(quantity - 1)
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l14 0"></path>
                    </svg>
                </button>

                <span className="text-5xl text-slate-700 font-semibold leading-none">
                    {quantity}
                </span>

                <button
                    className="p-2 bg-slate-700 text-white rounded-full shadow-sm"
                    onClick={() => {
                        if (quantity < stock) {
                            setQuantity(quantity + 1)
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                    </svg>
                </button>
            </div>

            <button className="bg-slate-500 text-white py-1 px-4 rounded-md shadow-md">
                Agregar al carrito
            </button>
        </section>
    )
}