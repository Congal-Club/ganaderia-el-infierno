import styles from "../../styles/LoginForm.module.css"


export default function LoginForm () {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> 
        Inicia sesion con tu cuenta
      </h2>
      <form> 
        <div className={styles.group}>
          <label htmlFor="email">
            Correo Electronico
          </label>
          <input type="email" name="email" id="email"/>
        </div>

        <div className={styles.group}>
          <label htmlFor="password">
            Contraseña
          </label>
          <input type="password" name="password" id="password"/>
        </div>

        <button type="submit">
          Iniciar Sesion
        </button>

      </form>
    </div>
  )
}