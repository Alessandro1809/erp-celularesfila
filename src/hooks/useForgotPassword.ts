import { useState } from 'react';
import axios from 'axios';
import clienteAxios from '../config/axios';

interface AlertType {
    mensaje: string;
    error?: boolean;
}

export const useForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState<AlertType>({ mensaje: '' });

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
            const { data } = await clienteAxios.post('/admin/olvide-password', { email });
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

    return {
        email,
        setEmail,
        alert,
        handleSubmit,
    };
};
