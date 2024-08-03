import { useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

interface AlertType {
    mensaje: string;
    error: boolean;
}

export const useTokenValidation = (token: string) => {
    const [tokenValido, setTokenValido] = useState(false);
    const [alert, setAlert] = useState<AlertType>({ mensaje: '', error: false });

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

    return { tokenValido, alert, setAlert };
};
