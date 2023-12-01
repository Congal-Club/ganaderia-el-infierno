import styles from "../../styles/LoginForm.module.css"
import toast from 'react-hot-toast'



export default function LoginForm () {
  const handleLogin= (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get("email")
    const password = formData.get("password")

    window.localStorage.setItem("user", JSON.stringify({email, password}))

    toast.success('Inicio de sesion exitoso', {
      duration: 5000,
      position: 'bottom-right',
    })
    
    setTimeout(()=>{
      window.location.href= "/"
    },2000)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}> 
        Inicia sesion con tu cuenta
      </h2>
      <form onSubmit={handleLogin}> 
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