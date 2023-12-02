import styles from "../../styles/ContactForm.module.css"
export default function ContactForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contactanos directamente</h2>
      
      
      <div className={styles.information}>
        <section>
          <h4>Tienda Fisica</h4>
          <p>Las adjuntas #122</p>
        </section>
        <section>
          <h4>Telefono</h4>
          <p>449-273-0234</p>
        </section>
      </div>

      <form className={styles.form}>
        <div className={styles.group}>
          <label>Tu nombre</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Tu nombre"
            />
        </div>

        <div className={styles.group}>
          <label>Direccion de Correo Electronico</label>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
            />
        </div>

        <div className={styles.group}>
          <label>Consulta</label>
            <textarea
              className={styles.textarea}
              placeholder="Mensaje"
            ></textarea>
        </div>
        <div className={styles.group}>
          <button className={styles.button}>Enviar</button>
        </div>
      </form>
    </div >
  )
}