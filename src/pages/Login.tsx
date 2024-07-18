import { ButtonLogin } from "../components/ButtonLogin"
export const Login = () => {
  return (
   <>
   <div className="flex justify-center items-center h-screen w-[100%]">
    <section>
    <ButtonLogin name="Iniciar Sesion"/>//aqui se pasan las props
    </section>
   </div>
   </>
  )
}
