
import FormLogin from "../components/login/FormLogin"
import { InfoScreen } from "../components/register/InfoScreen"
import { InfoScreen3 } from "../components/register/InfoScreen3"
import { Logos } from "../components/register/Logos"
import { Techone } from "../components/register/Techone"

export const InicioSesion = () => {
  //aqui se pasan las props
  return (
   <>
   <section className="flex flex-col justify-center items-center h-screen w-full md:container md:mx-auto animate-blurred-fade-in">
      <article className="flex flex-col space-y-2 md:flex-row w-full ">
        <div className="w-auto md:w-1/2 space-y-2">
          <Techone name="TECHONE" />
          <InfoScreen name="Gestión inteligente, resultados sorprendentes" /> 
          <InfoScreen3 name="Inicia sesión llenando nuestro formulario o bien iniciando sesión con tus redes." />
          <Logos />
        </div>
          <div className="w-full md:w-1/2 space-y-2 justify-center md:mx-auto">
            <h1 className="text-white text-xl font-sans m-4 font-bold">Inicia Sesión</h1>
              <div className="bg-[#82F7FF]/[17%] rounded m-4 w-5/6 md:w-2/3 justify-center border border-[#38FF88]" >  
                <FormLogin/>
                <section className="flex flex-row space-x-8 m-2 justify-center">
                <p className="text-white">¿No tienes una cuenta aún? <a href="Register" className="text-[#2BFF7F]">Registrate </a></p>
                <a href="./ForgotPassword" className="text-white "> Olvide mi contraseña</a>

                </section>

               
              </div> 
          
          </div>
      </article>
   </section>
   </>
  )
}
  