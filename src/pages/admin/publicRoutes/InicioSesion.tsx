import FormLogin from "../../../components/publicComponents/login/FormLogin";
import { Title } from "../../../components/publicComponents/register/Title";

export const InicioSesion = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen w-full animate-blurred-fade-in">
        <article className="flex flex-col w-full md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2 flex flex-col items-center space-y-4">
            <Title name="TECHONE" />
            <div className="bg-[#82F7FF]/[17%] rounded-md w-5/6 md:w-2/3 p-2 border border-[#38FF88]">
              <FormLogin />
            </div>
          </div>
        </article>

        <section className="flex w-full justify-center md:justify-start mt-4 px-4">
            <p className="text-white text-center md:text-left ml-0 md:ml-5 mt-20">
              ¿Problemas al iniciar sesión? <a href="forgot-password" className="text-[#DBFF5E]">Reestablece tu contraseña</a>
            </p>
          </section>
      </section>
    </>
  );
};

