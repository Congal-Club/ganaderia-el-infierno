import styles from "../../styles/LoginForm.module.css"


export default function LoginForm () {
  return (
    <div>
      <h2>
        Inicia sesion con tu cuenta
      </h2>
      <form> 
        <div>
          <label htmlFor="email">
            Correo Electronico
          </label>
          <input type="email" name="email" id="email"/>
        </div>

        <div>
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