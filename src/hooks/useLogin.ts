import { useState } from 'react';
import axios from 'axios';
import clienteAxios from '../config/axios';

interface AlertType {
    mensaje: string;
    error?: boolean;
}

export const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState<AlertType>({ mensaje: '' });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if([email, password].includes('')) {
            setAlerta({ mensaje: 'Todos los campos son obligatorios', error: true });
            return;
        }

        if (!validateEmail(email)) {
            setAlerta({ mensaje: 'Por favor, ingrese un email válido.', error: true });
            return;
        }

        if (!validatePassword(password)) {
            setAlerta({ mensaje: 'La contraseña debe tener al menos 8 caracteres y contener una combinación de letras, números y caracteres especiales.', error: true });
            return;
        }

        try {
            const { data } = await clienteAxios.post('/admin/autenticar', { email, password });
            console.log(data);

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setAlerta({ mensaje: error.response.data.msg, error: true });
            } else {
                setAlerta({ mensaje: 'Ha ocurrido un error desconocido. Por favor, intenta de nuevo más tarde.', error: true });
            }

            setTimeout(() => {
                setAlerta({ mensaje: '' });
            }, 5000);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        alerta,
        handleSubmit,
    };
};

export default useLogin;
