import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GradientButton } from '../components/GradientButton';
import { Logo } from '../components/Logo';
import clienteAxios from '../config/axios';
import { Alert } from '../components/Alert';

interface AlertType {
    mensaje: string;
    error: boolean;
}

export const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alert, setAlert] = useState<AlertType>({ mensaje: '', error: false });
    const [tokenValido, setTokenValido] = useState(false);
    const [passwordModificado, setPasswordModificado] = useState(false);

    const { token } = useParams();

    useEffect(() => {
        const comprobarToken = async () => {
            try {
                await clienteAxios(`/${token}`);
                setAlert({ mensaje: '', error: false });
                setTokenValido(true);
            } catch (error) {
                setAlert({ mensaje: 'Error en el enlace', error: true });
            }
        };
        comprobarToken();
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password.length < 6) {
            setAlert({ mensaje: 'La contraseña debe tener más de 6 caracteres', error: true });
            return;
        }

        if (password !== confirmPassword) {
            setAlert({ mensaje: 'Las contraseñas no coinciden', error: true });
            return;
        }

        try {
            const url = `/${token}`;
            const { data } = await clienteAxios.post(url, { password });
            setAlert({ mensaje: data.msg, error: false });
            setPasswordModificado(true);
        } catch (error: any) {
            setAlert({ mensaje: error.response?.data?.msg || 'ha ocurrido un error', error: true });
        }
    };

    const { mensaje } = alert;

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen w-full p-4">
                <Logo />
                <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-6 font-josefin">
                    Ingresa tu nueva contraseña e inicia sesión
                </h1>
                <section className="bg-custom-blue bg-opacity-20 border border-custom-green p-8 rounded-lg w-[100%] max-w-md">
                    {mensaje && <Alert alert={alert} />}
                    {tokenValido && (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-lg text-white font-medium mb-2 font-josefin">
                                    Contraseña:
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full p-2 border border-gray-300 bg-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <label htmlFor="confirmPassword" className="block text-lg text-white font-medium mb-2 font-josefin">
                                    Confirma tu contraseña:
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="w-full p-2 border border-gray-300 bg-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=""
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-center">
                                <GradientButton text="Reestablecer" />
                            </div>
                        </form>
                    )}
                    {passwordModificado && (
                        <Link className="block my-5 text-center text-gray-500" to="/">
                            Inicia sesión
                        </Link>
                    )}
                    <p className="text-left text-white mt-4 font-josefin">
                        ¿Ya tienes una cuenta?{' '}
                        <Link to="/" className="text-custom-green-text hover:underline font-josefin">
                            Inicia sesión
                        </Link>
                    </p>
                </section>
                <h1 className="text-xl md:text-2xl font-bold text-center text-white mt-6 font-josefin">
                    Recuerda no compartir tu contraseña con nadie y guardarla en un lugar seguro
                </h1>
            </div>
        </>
    );
};
