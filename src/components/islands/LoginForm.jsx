import styles from "../../styles/LoginForm.module.css"


export default function LoginForm () {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> 
        Inicia sesion con tu cuenta
      </h2>
      <form> 
        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>
            Correo Electronico
          </label>
          <input type="email" name="email" id="email" className={styles.input} placeholder="Escribe tu correo electronico"/>
        </div>

        <div className={styles.group}>
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input type="password" name="password" id="password" className={styles.input} placeholder="Escribe tu contraseña"/>
        </div>

        <button type="submit" className={styles.button}>
          Iniciar Sesion
        </button>

      </form>
    </div>
  )
}