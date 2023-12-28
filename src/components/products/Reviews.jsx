import { useState } from "react"

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
        <a href="/" className="bg-red-600 text-white py-1 px-2 rounded-md shadow-sm">Atras</a>
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
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
            </svg>
          </span>
        ))}
      </p>
    </div>
  )
}
