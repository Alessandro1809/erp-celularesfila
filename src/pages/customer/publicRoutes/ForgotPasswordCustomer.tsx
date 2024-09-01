import { Title } from "../../../components/publicComponents/register/Title"
import { LoginButton } from "../../../components/publicComponents/Customer/LoginButton"
import { QuestionLogo } from "../../../components/publicComponents/Customer/QuestionLogo"

const handleSubmit = () => {
    
}
const ForgotPasswordCustomer = () => {
    return (
        <>
        <section className="flex flex-col justify-center items-center transition-all animate-blurred-fade-in duration-1000 w-full h-screen md:container md:mx-auto px-4">
            <article className="absolute top-4 right-4">
                <div className="border border-white rounded-full">
                    <div className="w-2 h-2 border rounded-full bg-[#DBFF5E] absolute -top-1 -right-0"></div>
                    <a href="#" >
                        <QuestionLogo/>
                    </a>
                </div>
            </article>
            <article className="-mt-10">
                <Title name="TECHONE"/>    
            </article>
            <article className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-white p-2 transition-all duration-1000 mt-10 text-center">
                <p>
                    Te enviaremos un correo para reestablecer tus credendiales
                </p>
            </article>
            <article className="flex flex-col mt-10 bg-gradient-to-b from-[#82F7FF]/[17%] to-transparent rounded-md border border-[#38FF88] p-4 xl:w-2/6 md:w-2/4 sm:w-3/4">
                <form className="flex flex-col w-full mt-0 space-y-3 rounded-md text-[#DBFF5E] p-4">
                    <label htmlFor="name">Correo:</label>
                    <input
                        className="rounded-md bg-[#D9D9D9] h-10 text-black p-2" 
                        type="email" 
                        id="email" 
                        placeholder="example@example.com"/>

                    <div className="flex justify-center"> {/*Ver lógica para el botón*/}
                        <LoginButton name="Cambiar contraseña" action={handleSubmit}/>    
                    </div>    
                    
                </form>
            </article>
            <article className="absolute bottom-4 left-4 text-sm text-white">
                <p>
                    ¿Ya tienes tus credenciales? <a href="#" className="text-[#DBFF5E]">Inicia Sesión</a>
                </p>
            </article>
        </section>
        </>
    )
}

export default ForgotPasswordCustomer