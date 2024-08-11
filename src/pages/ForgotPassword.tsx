import { GradientButton } from '../components/Password/GradientButton';
import { Title } from '../components/register/Title';
import { Alert } from '../components/Password/Alert';
import { useForgotPassword } from '../hooks/useForgotPassword';

export const ForgotPassword = () => {
    const { email, setEmail, alert, handleSubmit } = useForgotPassword();
    const { mensaje } = alert;

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen w-full p-4 animate-blurred-fade-in">
                <Title name="TECHONE" />
                <h1 className="text-3xl md:text-5xl font-bold text-center text-[#DBFF5E] mb-6 font-josefin">
                    ¡Vamos a reestablecer tu contraseña!
                </h1>
                <section className="bg-custom-blue bg-opacity-20 border border-custom-green p-8 rounded-lg w-full max-w-md">
                    {mensaje && <Alert alert={alert} />}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg text-[#DBFF5E] font-medium mb-2 font-josefin">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 bg-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Ingresa tu correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <GradientButton text="Enviar Email" />
                        </div>
                    </form>
                    <p className="text-left text-[#DBFF5E] mt-4 font-josefin">
                        ¿Ya tienes una cuenta? <a href="login" className="text-white hover:underline font-josefin">Inicia sesión</a>
                    </p>
                </section>
                <h1 className="text-xl md:text-2xl font-bold text-center text-[#DBFF5E] mt-6 font-josefin">
                    Revisa tu bandeja de entrada y reestablece tu contraseña
                </h1>
            </div>
        </>
    );
};
