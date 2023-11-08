import { useEffect, useState } from "react"

export default function Cookies() {
  const [isAccepted, setIsAccepted] = useState(true)
  const [essentials, setEssentials] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const acceptedCookies = localStorage.getItem('acceptedCookies')
    const isAcceptedTheCookies = acceptedCookies != null
    setIsAccepted(isAcceptedTheCookies)
  }, [])

  useEffect(() => {
    if (isAccepted) {
      document.body.classList = 'min-h-screen'
    } else {
      document.body.classList = 'min-h-screen bg-gray-100'
    }
  }, [isAccepted])

  const onChange = (e) => {
    const name = e.target.name

    if (name === 'essentials') setEssentials(!essentials)
    if (name === 'analytics') setAnalytics(!analytics)
    if (name === 'marketing') setMarketing(!marketing)
  }

  const onAcceptCookies = () => {
    localStorage.setItem('acceptedCookies', true)
    setIsAccepted(true)
  }

  return (
    <>
      {!isAccepted && (
        <section className="fixed z-50 top-[15%] left-[30%] w-[50%] rounded-lg border bg-white text-card-foreground shadow-2xl max-w-lg" data-v0-t="card">
          <header className="flex flex-col space-y-1.5 p-6 border-b border-dark-gray-300 pb-4">
            <section className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" mr-2">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                <path d="M8.5 8.5v.01"></path>
                <path d="M16 15.5v.01"></path>
                <path d="M12 12v.01"></path>
                <path d="M11 17v.01"></path>
                <path d="M7 14v.01"></path>
              </svg>
              
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Preferencias de Cookies
              </h3>
            </section>
            
            <p className="text-sm text-muted-foreground">
              Administre su configuración de cookies. Puede habilitar o deshabilitar diferentes tipos de cookies a continuación.
            </p>
          </header>
          
          <main className="p-6 space-y-4 pt-4">
            <article className="flex justify-between items-start space-y-2">
              <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="essential">
                  Cookies Esenciales
                </label>

                <p className="text-dark-gray-500 text-sm">
                  Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar.
                </p>
              </div>
              
              <input
                type="checkbox"
                name="essentials"
                id="essentials"
                className="peer accent-slate-700"
                checked={essentials}
                onChange={onChange}
              />
            </article>
            
            <article className="flex justify-between items-start space-y-2">
              <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="analytics">
                  Cookies de Analíticas
                </label>
                
                <p className="text-dark-gray-500 text-sm">
                  Estas cookies nos permiten contar visitas y fuentes de tráfico, para que podamos medir y mejorar el rendimiento de nuestro sitio.
                </p>
              </div>
              
              <input
                type="checkbox"
                name="analytics"
                id="analytics"
                className="peer accent-slate-700"
                checked={analytics}
                onChange={onChange}
              />
            </article>
            
            <article className="flex justify-between items-start space-y-2">
              <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="marketing">
                  Cookies de Marketing
                </label>
                
                <p className="text-dark-gray-500 text-sm">
                  Estas cookies nos ayudan a mostrarle anuncios relevantes.
                </p>
              </div>
              
              <input
                type="checkbox"
                name="marketing"
                id="marketing"
                className="peer accent-slate-700"
                checked={marketing}
                onChange={onChange}
              />
            </article>
          </main>
          
          <div className="border-t border-dark-gray-300 mt-4"></div>
          
          <footer className="flex items-center p-6">
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto"
              type="submit"
              onClick={onAcceptCookies}
            >
              Aceptar cookies
            </button>
          </footer>
        </section>
      )}
    </>
  )
}
