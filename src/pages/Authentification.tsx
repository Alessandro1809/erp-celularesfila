import { Title } from "../components/register/Title";
import { Subtitle } from "../components/register/Subtitle";
import { Information } from "../components/register/Information";
import { Link } from "react-router-dom";

const Authentification = () => {
  return (
    <>
        <article className="flex flex-col justify-center items-center transition-all animate-blurred-fade-in duration-1000 w-full h-screen md:container md:mx-auto mt-20">
            <section className="flex flex-col justify-center items-center text-center h-screen w-full gap-4">
                <Title name="TECHONE" />
                <Subtitle name="¡Genial, casi estamos listos!" />
                <Information name="Confirma tu cuenta e inicia tu gestión"/>
                
            </section>

            <section className="mt-20">
                {/* Falta el Link*/}
                <Link className=" bg-gradient-to-r from-gray-100 to-green-500 text-black font-bold py-6 px-8 rounded-md shadow-lg my-3 text-sm md:text-lg lg:text-xl transition-all duration-1000 animate-blurred-fade-in " to="/login">
                Iniciar sesión
                </Link>
            </section>

            <section className="text-center items-top h-screen w-full mt-20">
                <Information name="Gracias por preferir nuestros servicios, en caso de un problema o duda "/>
                <a href="#" className="text-[#1CBBFF] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold p-2 transition-all duration-1000">contáctanos</a>
            </section>
        </article>
        
    </>
  )
}

export default Authentification
