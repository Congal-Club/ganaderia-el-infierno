import { useState } from "react"
import StarIcon from "./icons/StarIcon"

export default function Reviews({ reviews }) {
  const [productReviews, setProductReviews] = useState(reviews)

  const handleAddReview=(review) => {
    setProductReviews([
      ...productReviews, 
      review
    ])
  }

  return (
    <section>
      {productReviews.map((review)=>(
        <Review
          key={review.review}
          review={review}
        />
      ))}

      <ReviewForm onAddReview={handleAddReview}/>
    </section>
  )
}

function ReviewForm({ onAddReview}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get("name")
    const email = formData.get("email")
    const review = formData.get("review")
    const rate = formData.get("rate")

    onAddReview({
      name, email, review, rate:Number(rate)
    })
  }

  return (
    <form className="sm:w-full md:w-[47%] lg:w-[80%] mt-5 overflow-hidden pb-2" onSubmit={handleSubmit}>
      <h2 className="text-2xl">Escribir una opinion</h2>

      <div>
        <label className="sm:w-full md:w-[47%] lg:w-[100%] ml-2">Nombre</label>
        <input
          className="sm:w-full md:w-[47%] lg:w-[100%] border border-slate-400 text-lg py-2 px-4 rounded-md mb-4"
          type="text"
          name="name"
          id="name"
          placeholder="Escribe tu Nombre"
        />
      </div>

      <div>
        <label className="sm:w-full md:w-[47%] lg:w-[100%] ml-2">Correo</label>
        <input
          className="sm:w-full md:w-[47%] lg:w-[100%] border border-slate-400 text-lg py-2 px-4 rounded-md mb-4"
          type="email"
          name="email"
          id="email"
          placeholder="Escribe tu Email"
        />
      </div>

      <div>
        <label className="sm:w-full md:w-[47%] lg:w-[100%] ml-2">Tu opinion</label>
        <textarea
          className="sm:w-full md:w-[47%] lg:w-[100%] border border-slate-400 text-lg py-2 px-4 rounded-md mb-4"
          name="review"
          id="review"
          placeholder="Escribe tu Opinion Acerca del Producto"

        ></textarea>
      </div>

      <div>
        <label className="sm:w-full md:w-[47%] lg:w-[100%] ml-2">Valoracion</label>
        <div className="flex justify-start items-center gap-2">
          <span>Malo</span>
          <input type="radio" name="rate" id="rate" value="1" />
          <input type="radio" name="rate" id="rate" value="2" />
          <input type="radio" name="rate" id="rate" value="3" />
          <input type="radio" name="rate" id="rate" value="4" />
          <input type="radio" name="rate" id="rate" value="5" />
          <span> Bueno</span>
        </div>
      </div>

      <div className="flex justify-start mt-4 gap-4">
        <a href="/" className="bg-red-600 text-white py-1 px-2 rounded-md shadow-sm ">Atras</a>
        <button className="bg-slate-700 text-white py-1 px-2 rounded-md shadow-sm">Guardar</button>
      </div>
    </form>
  )
}

function Review({ review }) {
  return (
    <div className="sm:w-full md:w-[47%] lg:w-[80%] border rounded-md border-slate-400 overflow-hidden shadow pb-2 mt-4">
      <header className="sm:w-full md:w-[47%] lg:w-[100%] border-b border-slate-400 overflow-hidden shadow bg-gray-50 p-2">
        <h4 className="text-xl text-black font-semibold pb-2">{review.name}</h4>
      </header>
      <p className="p-2">
        {review.review}
      </p>
      <p className="p-2 flex flex-row gap-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <span className={rating <= review.rate ? 'text-yellow-500' : 'text-slate-800'}>
            <StarIcon />
          </span>
        ))}
      </p>
    </div>

  )
}
