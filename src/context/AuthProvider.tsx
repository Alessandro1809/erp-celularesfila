// AuthProvider.tsx
import React, { useState, useEffect, createContext, ReactNode } from "react";
import clienteAxios from "../config/axios";
import { AxiosError, AxiosResponse } from "axios";
import { AuthContextType, UserProfile } from '../types/Authtypes';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [cargando, setCargando] = useState(true);
  const [Auth, setAuth] = useState<UserProfile | null>(null);

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
        const { data }: AxiosResponse<UserProfile> = await clienteAxios.get('/admin/perfil', config);
        setAuth(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data?.msg);
        }
        setAuth(null);
      }

      setCargando(false);
    };
    autenticarUsuario();
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    setAuth(null);
  };

  const actualizarPerfil = async (datos: Partial<UserProfile>) => {
    const token = localStorage.getItem('token');
    if (!token || !Auth?._id) {
      setCargando(false);
      return { mensaje: 'Token no encontrado o perfil no disponible', error: true };
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const url = `/admin/perfil/${Auth._id}`;
      const { data }: AxiosResponse<{ msg: string }> = await clienteAxios.put(url, datos, config);
      
      return { mensaje: data.msg, error: false };
    } catch (error) {
      if (error instanceof AxiosError) {
        return { mensaje: error.response?.data?.msg || 'Error desconocido', error: true };
      }
      return { mensaje: 'Error desconocido', error: true };
    }
  };

  const guardarPassword = async (datos: { oldPassword: string; newPassword: string }) => {
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

  // Pendiente corregir ruta de la API
    try {
      const url = '/admin/olvide-password';
      const { data }: AxiosResponse<{ msg: string }> = await clienteAxios.put(url, datos, config);
      return { mensaje: data.msg };
    } catch (error) {
      if (error instanceof AxiosError) {
        return { mensaje: error.response?.data?.msg || 'Error desconocido', error: true };
      }
      return { mensaje: 'Error desconocido', error: true };
    }
  };


  // Para Customer: cerrarSesion, actualizarPerfil(De momento no) y guardarPassword(url: /olvide-password/:token "post")

  
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
