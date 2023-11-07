import { useState } from "react"

export default function AddToCart({ id, stock }) {
    const [quantity, setQuantity] = useState(0)

    return (
        <section>
            <div>
                <button>
                    -
                </button>

                <span>
                    {quantity}
                </span>

                <button>
                    +
                </button>
            </div>

            <button>
                Agregar al carrito
            </button>
        </section>
    )
}