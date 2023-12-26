import { useState } from 'react'
import styles from '../../styles/FAQ.module.css'

const categories = [
  {
    id: 1,
    name: 'Métodos de pago',
    svg: <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'><path d='M21.19 7h2.81v15h-21v-5h-2.81v-15h21v5zm1.81 1h-19v13h19v-13zm-9.5 1c3.036 0 5.5 2.464 5.5 5.5s-2.464 5.5-5.5 5.5-5.5-2.464-5.5-5.5 2.464-5.5 5.5-5.5zm0 1c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm.5 8h-1v-.804c-.767-.16-1.478-.689-1.478-1.704h1.022c0 .591.326.886.978.886.817 0 1.327-.915-.167-1.439-.768-.27-1.68-.676-1.68-1.693 0-.796.573-1.297 1.325-1.448v-.798h1v.806c.704.161 1.313.673 1.313 1.598h-1.018c0-.788-.727-.776-.815-.776-.55 0-.787.291-.787.622 0 .247.134.497.957.768 1.056.344 1.663.845 1.663 1.746 0 .651-.376 1.288-1.313 1.448v.788zm6.19-11v-4h-19v13h1.81v-9h17.19z' /></svg>
  },
  {
    id: 2,
    name: 'entregas',
    svg: <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'><path d='M7 24h-5v-9h5v1.735c.638-.198 1.322-.495 1.765-.689.642-.28 1.259-.417 1.887-.417 1.214 0 2.205.499 4.303 1.205.64.214 1.076.716 1.175 1.306 1.124-.863 2.92-2.257 2.937-2.27.357-.284.773-.434 1.2-.434.952 0 1.751.763 1.751 1.708 0 .49-.219.977-.627 1.356-1.378 1.28-2.445 2.233-3.387 3.074-.56.501-1.066.952-1.548 1.393-.749.687-1.518 1.006-2.421 1.006-.405 0-.832-.065-1.308-.2-2.773-.783-4.484-1.036-5.727-1.105v1.332zm-1-8h-3v7h3v-7zm1 5.664c2.092.118 4.405.696 5.999 1.147.817.231 1.761.354 2.782-.581 1.279-1.172 2.722-2.413 4.929-4.463.824-.765-.178-1.783-1.022-1.113 0 0-2.961 2.299-3.689 2.843-.379.285-.695.519-1.148.519-.107 0-.223-.013-.349-.042-.655-.151-1.883-.425-2.755-.701-.575-.183-.371-.993.268-.858.447.093 1.594.35 2.201.52 1.017.281 1.276-.867.422-1.152-.562-.19-.537-.198-1.889-.665-1.301-.451-2.214-.753-3.585-.156-.639.278-1.432.616-2.164.814v3.888zm3.79-19.913l3.21-1.751 7 3.86v7.677l-7 3.735-7-3.735v-7.719l3.784-2.064.002-.005.004.002zm2.71 6.015l-5.5-2.864v6.035l5.5 2.935v-6.106zm1 .001v6.105l5.5-2.935v-6l-5.5 2.83zm1.77-2.035l-5.47-2.848-2.202 1.202 5.404 2.813 2.268-1.167zm-4.412-3.425l5.501 2.864 2.042-1.051-5.404-2.979-2.139 1.166z' /></svg>
  },
  {
    id: 3,
    name: 'seguridad',
    svg: <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'><path d='M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 1.292c2.942 2.31 5.12 2.655 8 2.701v10.542c0 3.891-2.638 4.943-8 8.284-5.375-3.35-8-4.414-8-8.284v-10.542c2.88-.046 5.058-.391 8-2.701zm5 7.739l-5.992 6.623-3.672-3.931.701-.683 3.008 3.184 5.227-5.878.728.685z' /></svg>
  },
  {
    id: 4,
    name: 'cuenta',
    svg: <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'><path d='M9.484 15.696l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm10.516 11.304h-8v1h8v-1zm0-5h-8v1h8v-1zm0-5h-8v1h8v-1zm4-5h-24v20h24v-20zm-1 19h-22v-18h22v18z' /></svg>
  }
]

const questions = [
  {
    id: 1,
    category: 'Métodos de pago',
    questions: [
      { id: 1, text: '¿Que métodos de pago disponibles tienen?', answer: 'Los métodos de pago disponibles son a traves de una cuenta de PayPal y mediante tarjeta de crédito.' },
      { id: 2, text: '¿Tienen plazo de pago?', answer: 'No, los pagos se deben de realizar para confirmar la compra.' },
    ],
  },
  {
    id: 2,
    category: 'entregas',
    questions: [
      { id: 3, text: '¿Tienen entregas a domicilio?', answer: 'Si, los productos se entregan a domicilio' },
      { id: 4, text: '¿En cuanto sale el envío a mi país?', answer: 'Los envíos se realizan solamente en la republica mexicana y costo ya esta incluido en el precio del producto. Si el envió es fuera de México el comprador deberá hacerse cargo de los costos de envió.' },
    ],
  },
  {
    id: 3,
    category: 'seguridad',
    questions: [
      { id: 5, text: '¿Como puedo saber si son confiables?', answer: 'la confianza nos la hemos ganado en base a un buen trato, experiencia y calidad hacia nuestros clientes.' },
      { id: 6, text: '¿Que pasa con mis datos personales?', answer: 'Los datos personales de los usuarios son tratados en base a la estipulación de normas internacionales sobre la protección de datos personales en aplicaciones web.' },
    ],
  },
  {
    id: 4,
    category: 'cuenta',
    questions: [
      { id: 7, text: '¿Como puedo acceder a mis pedidos?', answer: 'Los pedidos son entregados en la dirección registrada al momento de confirmar la compra, una ves que esta sea pagada.' },
      { id: 8, text: '¿Como puedo cambiar mi contraseña?', answer: 'En el apartado de cuenta, es posible modificar todos los datos personales de los usuarios, incluyendo la contraseña de la cuenta.' },
    ],
  }
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState({
    id: 1,
    name: 'Métodos de pago',
    svg: <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'><path d='M21.19 7h2.81v15h-21v-5h-2.81v-15h21v5zm1.81 1h-19v13h19v-13zm-9.5 1c3.036 0 5.5 2.464 5.5 5.5s-2.464 5.5-5.5 5.5-5.5-2.464-5.5-5.5 2.464-5.5 5.5-5.5zm0 1c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm.5 8h-1v-.804c-.767-.16-1.478-.689-1.478-1.704h1.022c0 .591.326.886.978.886.817 0 1.327-.915-.167-1.439-.768-.27-1.68-.676-1.68-1.693 0-.796.573-1.297 1.325-1.448v-.798h1v.806c.704.161 1.313.673 1.313 1.598h-1.018c0-.788-.727-.776-.815-.776-.55 0-.787.291-.787.622 0 .247.134.497.957.768 1.056.344 1.663.845 1.663 1.746 0 .651-.376 1.288-1.313 1.448v.788zm6.19-11v-4h-19v13h1.81v-9h17.19z' /></svg>
  })

  const handleCategoryClick = (category) => {
    const categorySelected = categories.find((c) => c.id === category.id)

    if (categorySelected) {
      setActiveCategory(categorySelected)
    }
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Preguntas Frecuentes
      </h1>

      <Categories
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      
      <Questions
        questions={questions}
        activeCategory={activeCategory}
      />
    </div>
  )
}

function Categories({ categories, activeCategory, onCategoryClick }) {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <div
          key={category.id}
          className={`${styles.category} ${category.id === activeCategory.id ? styles.active : ''}`}
          onClick={() => onCategoryClick(category)}
        >
          <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'>
            {category.svg}
          </svg>

          <p>
            {category.name}
          </p>
        </div>
      ))}
    </div>
  )
}

function Questions({ questions, activeCategory }) {
  return (
    <div className={styles.questions}>
      {questions.filter((q) => q.category === activeCategory.name).map((question) => (
        <div
          key={question.id}
          className={`${styles['questions-container']}`}
        >
          {question.questions.map((q) => (
            <Question key={q.id} question={q} />
          ))}
        </div>
      ))}
    </div>
  )
}

function Question({ question }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`${styles['question-container']} ${isActive ? styles.active : ''}`}
    >
      <p className={styles.question}>
        {question.text} <img src='/suma.svg' alt='Abrir Respuesta' />
      </p>

      <p className={styles.answer}>
        {question.answer}
      </p>
    </div>
  )
}
