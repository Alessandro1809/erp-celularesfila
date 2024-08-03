import { useState } from 'react';
import clienteAxios from '../config/axios';

interface AlertType {
    mensaje: string;
    error: boolean;
}

export const usePasswordReset = (token: string, setAlert: React.Dispatch<React.SetStateAction<AlertType>>) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordModificado, setPasswordModificado] = useState(false);

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

    return { password, setPassword, confirmPassword, setConfirmPassword, handleSubmit, passwordModificado };
};
