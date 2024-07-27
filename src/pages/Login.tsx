import { ButtonLogin } from "../components/register/ButtonLogin"
//import { ButtonLogin } from "../components/ButtonLogin"
import FormLogin  from "../components/FormLogin"
export const Login = () => {
  //aqui se pasan las props
  return (
   <>
       <section className="flex flex-col justify-center items-center h-screen w-full md:container md:mx-auto">
      <article className="flex flex-col space-y-4 md:flex-row w-full md:container md:mx-auto">
        <div className="w-full md:w-1/2 m-1 space-y-6">
          <h1 className="text-cyan-400 text-6xl m-4 font-sans font-bold">TECHONE</h1>
          <h2 className="text-white text-left text-4xl m-4 font-sans font-bold">Gestión inteligente, resultados sorprendentes</h2> 
          <p className="text-white text-left text-xl m-4 font-sans font-bold">Inicia sesión llenando nuestro formulario o bien iniciando sesión con tus redes.</p>
        </div>
        <div className="w-full md:w-1/2 space-y-2 justify-center md:mx-auto">
          <h1 className="text-white text-xl font-sans m-4 font-bold">Inicia Sesión</h1>
          <div className="bg-cyan-900 opacity-85 rounded m-4 w-5/6 md:w-1/2 justify-center">  
            <FormLogin/>
          </div> 
          
        </div>
      </article>
   </section>
   </>
  )
}
  