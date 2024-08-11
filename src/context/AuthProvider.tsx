import React, { useState, useEffect, createContext, ReactNode } from "react";
import clienteAxios from "../config/axios";
import { AxiosError, AxiosResponse } from "axios";

interface AuthContextType {
  Auth: object; // Cambia `any` por la estructura esperada de los datos de autenticación
  setAuth: React.Dispatch<React.SetStateAction<JSON>>;
  cargando: boolean;
  cerrarSesion: () => void;
  actualizarPerfil: (datos: JSON) => Promise<{ mensaje: string; error: boolean }>;
  guardarPassword: (datos: JSON) => Promise<{ mensaje: string; error?: boolean }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [cargando, setCargando] = useState(true);
  const [Auth, setAuth] = useState<object>({}); // Cambia `any` por la estructura esperada

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setCargando(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      };

      try {
        const { data }: AxiosResponse<JSON> = await clienteAxios.get('/veterinarios/perfil', config);
        setAuth(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data?.msg);
        }
        setAuth({});
      }

      setCargando(false);
    };
    autenticarUsuario();
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    setAuth({});
  };

  const actualizarPerfil = async (datos: JSON) => { // Cambia `any` por la estructura esperada
    const token = localStorage.getItem('token');
    const { _id } = Auth as { _id: string };
    if (!token) {
      setCargando(false);
      return { mensaje: 'Token no encontrado', error: true };
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const url = `/veterinarios/perfil/${_id}`;
      const { data }: AxiosResponse<JSON> = await clienteAxios.put(url, datos, config);
      
      return { mensaje: 'Almacenado correctamente', error: false };
    } catch (error) {
      if (error instanceof AxiosError) {
        return { mensaje: error.response?.data?.msg, error: true };
      }
      return { mensaje: 'Error desconocido', error: true };
    }
  };

  const guardarPassword = async (datos: JSON) => { // Cambia `any` por la estructura esperada
    const token = localStorage.getItem('token');
    if (!token) {
      setCargando(false);
      return { mensaje: 'Token no encontrado', error: true };
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const url = '/veterinarios/actualizarPassword';
      const { data }: AxiosResponse<AxiosResponse> = await clienteAxios.put(url, datos, config);
      return { mensaje: data.data.msg };
    } catch (error) {
      if (error instanceof AxiosError) {
        return { mensaje: error.response?.data?.msg, error: true };
      }
      return { mensaje: 'Error desconocido', error: true };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        Auth,
        setAuth,
        cargando,
        cerrarSesion,
        actualizarPerfil,
        guardarPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
