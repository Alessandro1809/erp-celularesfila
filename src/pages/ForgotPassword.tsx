import { useState } from 'react';
import { GradientButton } from '../components/GradientButton';
import { Logo } from '../components/Logo';
import clienteAxios from '../config/axios';
import { Alert } from '../components/Alert';
import axios from 'axios';

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState<{ mensaje: string; error?: boolean }>({ mensaje: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === '' || email.length < 6) {
            setAlert({ mensaje: 'El email es obligatorio', error: true });
            setTimeout(() => {
                setAlert({ mensaje: '' });
            }, 3000);
            return;
        }


        try {
            const { data } = await clienteAxios.post('/     ', { email });
            setAlert({ mensaje: data.msg, error: false });
            setTimeout(() => {
                setAlert({ mensaje: '' });
            }, 5000);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        setAlert({ mensaje: 'Solicitud inválida. Por favor, revisa el email ingresado.', error: true });
                        break;
                    case 404:
                        setAlert({ mensaje: 'No se encontró ninguna cuenta con ese email.', error: true });
                        break;
                    case 500:
                        setAlert({ mensaje: 'Error del servidor. Por favor, intenta de nuevo más tarde.', error: true });
                        break;
                    default:
                        setAlert({ mensaje: error.response.data.msg || 'ha ocurrido un error.', error: true });
                        break;
                }
            } else {
                setAlert({ mensaje: 'ha ocurrido un error desconocido. Por favor, intenta de nuevo más tarde.', error: true });
            }
            setTimeout(() => {
                setAlert({ mensaje: '' });
            }, 5000);
        }
    };

    const { mensaje } = alert;
    

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen w-full p-4">
                <Logo />
                <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-6 font-josefin">
                    ¡Vamos a reestablecer tu contraseña!
                </h1>
                <section className="bg-custom-blue bg-opacity-20 border border-custom-green p-8 rounded-lg w-full max-w-md">
                    {mensaje && <Alert alert={alert} />}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg text-white font-medium mb-2 font-josefin">
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
                    <p className="text-left text-white mt-4 font-josefin">
                        ¿Ya tienes una cuenta? <a href="/" className="text-custom-green-text hover:underline font-josefin">Inicia sesión</a>
                    </p>
                </section>
                <h1 className="text-xl md:text-2xl font-bold text-center text-white mt-6 font-josefin">
                    Revisa tu bandeja de entrada y reestablece tu contraseña
                </h1>
            </div>
        </>
    );
};
