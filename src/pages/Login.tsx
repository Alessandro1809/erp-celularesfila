import { ButtonLogin } from "../components/ButtonLogin"
export const Login = () => {
  //aqui se pasan las props
  return (
   <>
   <div className="flex justify-center items-center h-screen w-[100%]">
    <h1 className="text-3xl font-bold text-white bg-slate-400/30 rounded-md">Inicio de Sesion</h1>
     <section>
    <ButtonLogin name="Iniciar Sesion"/>
    </section>
   </div>
   </>
  )
}
  