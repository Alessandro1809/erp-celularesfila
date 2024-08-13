import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clienteAxios from '../config/axios';
import { AxiosError } from 'axios';

interface AlertType {
    mensaje: string;
    error: boolean;
}

export const useNewPassword = () => {
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
            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                    setAlert({ mensaje: error.response?.data?.msg || 'Error en el enlace', error: true });
                } else {
                    setAlert({ mensaje: 'Error desconocido', error: true });
                }
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
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                setAlert({ mensaje: error.response?.data?.msg || 'ha ocurrido un error', error: true });
            } else {
                setAlert({ mensaje: 'Error desconocido', error: true });
            }
        }
    };

    return {
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        alert,
        tokenValido,
        passwordModificado,
        handleSubmit,
    };
};


