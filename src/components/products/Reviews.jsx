import { useState } from 'react'

export default function Reviews({ reviews }) {
  const [productReviews, setProductReviews] = useState(reviews)

  const handleAddReview=(review) => {
    setProductReviews([
      ...productReviews, 
      review
    ])
  }

  return (
    <section className='w-full'>
      {productReviews.map((review)=>(
        <Review
          key={review.review}
          review={review}
        />
      ))}

      <ReviewForm
        onAddReview={handleAddReview}
      />
    </section>
  )
}

function ReviewForm({ onAddReview }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const review = formData.get('review')
    const rate = formData.get('rate')

    onAddReview({
      name, email, review, rate:Number(rate)
    })

    e.target.reset()
  }

  return (
    <form className='w-full lg:w-1/2 my-4 pb-2' onSubmit={handleSubmit}>
      <h2 className='text-2xl font-medium'>
        Escribir una opinión
      </h2>

      <div className='w-full flex flex-col flex-nowrap gap-1 my-4'>
        <label className='text-sm font-bold'>
          Nombre
        </label>

        <input
          className='inline-block w-full py-1 px-3 border-[1px] border-gray-300 rounded outline-none'
          type='text'
          name='name'
          id='name'
          placeholder='Escribe tu Nombre'
        />
      </div>

      <div className='w-full flex flex-col flex-nowrap gap-1 my-4'>
        <label className='text-sm font-bold'>
          Correo
        </label>

        <input
          className='inline-block w-full py-1 px-3 border-[1px] border-gray-300 rounded outline-none'
          type='email'
          name='email'
          id='email'
          placeholder='Escribe tu Email'
        />
      </div>

      <div className='w-full flex flex-col flex-nowrap gap-1 my-4'>
        <label className='text-sm font-bold'>
          Tu opinion
        </label>

        <textarea
          className='inline-block w-full py-1 px-3 border-[1px] border-gray-300 rounded outline-none'
          name='review'
          id='review'
          placeholder='Escribe tu Opinion Acerca del Producto'
        />
      </div>

      <div className='w-full flex flex-col flex-nowrap gap-1 my-4'>
        <label className='text-sm font-bold'>
          Valoración
        </label>

        <div className='flex justify-start items-center gap-2'>
          <span className='text-red-600 font-medium'>Malo</span>
          <input type='radio' name='rate' id='rate' value='1' className='accent-yellow-500' />
          <input type='radio' name='rate' id='rate' value='2' className='accent-yellow-500' />
          <input type='radio' name='rate' id='rate' value='3' className='accent-yellow-500' />
          <input type='radio' name='rate' id='rate' value='4' className='accent-yellow-500' />
          <input type='radio' name='rate' id='rate' value='5' className='accent-yellow-500' />
          <span className='text-green-600 font-medium'>Bueno</span>
        </div>
      </div>

      <button className='bg-indigo-500 hover:bg-indigo-700 hover:shadow-lg hover:scale-105 transition py-1 px-4 text-white font-bold rounded'>
        Guardar
      </button>
    </form>
  )
}

function Review({ review }) {
  return (
    <div className='w-full lg:w-1/2 my-2 p-2 border-[1px] border-gray-300 rounded-md'>
      <header className='w-full'>
        <p className='w-full flex justify-start items-center gap-2'>
          <span className='text-lg'>{review.name}</span>
          <span className='text-sm text-gray-500'>{review.email}</span>
        </p>
      </header>

      <div className='mb-1 flex flex-row gap-1'>
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            className={rating <= review.rate ? 'text-yellow-500' : 'text-slate-800'}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-star-filled' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z' strokeWidth='0' fill='currentColor'></path>
            </svg>
          </span>
        ))}
      </div>

      <p className='w-full text-base text-pretty'>
        {review.review}
      </p>
    </div>
  )
}
