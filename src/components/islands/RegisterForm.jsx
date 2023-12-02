import styles from "../../styles/RegisterForm.module.css"
import toast from 'react-hot-toast'



export default function LoginForm () {
  const handleRegister= (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get("name")
    const lastname = formData.get("lastname")
    const email = formData.get("email")
    const address = formData.get("address")
    const password = formData.get("password")

    window.localStorage.setItem("user", JSON.stringify({name, lastname, email, address, password}))

    toast.success('Registro de usuario exitoso', {
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
        Registro de Usuario
      </h2>
      <form onSubmit={handleRegister}> 

     <div className={styles.group}>
          <label htmlFor="name" className={styles.label}>
            Nombre
          </label>
          <input type="text" name="name" id="name" className={styles.input} placeholder="Escriba su nombre"/>
        </div>

        <div className={styles.group}>
          <label htmlFor="lastname" className={styles.label}>
            Apellido
          </label>
          <input type="text" name="lastname" id="lastname" className={styles.input} placeholder="Escriba su apellido"/>
        </div>

        <div className={styles.group}>
          <label htmlFor="address" className={styles.label}>
            Direccion
          </label>
          <input type="text" name="address" id="address" className={styles.input} placeholder="Escribe una direccion"/>
        </div>

      
        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>
            Correo Electronico
          </label>
          <input type="email" name="email" id="email" className={styles.input} placeholder="Escribe un correo electronico"/>
        </div>

        <div className={styles.group}>
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input type="password" name="password" id="password" className={styles.input} placeholder="Escribe una contraseña"/>
        </div>

        <div className={styles.group}>
          <label htmlFor="password" className={styles.label}>
            Confirme contraseña
          </label>
          <input type="password" name="password" id="password" className={styles.input} placeholder="Confirme contraseña"/>
        </div>

        <a href="/login" className={styles.link}>¿Ya tienes cuenta? Inicia sesion</a>

        <button type="submit" className={styles.button}>
          Registrar usuario
        </button>

      </form>
    </div>
  )
}