export interface UserProfile {
    _id: string;
    name: string;
    email: string;
  }
  
  export interface AuthContextType {
    Auth: UserProfile | null;
    setAuth: React.Dispatch<React.SetStateAction<UserProfile | null>>;
    cargando: boolean;
    cerrarSesion: () => void;
    actualizarPerfil: (datos: Partial<UserProfile>) => Promise<{ mensaje: string; error: boolean }>;
    guardarPassword: (datos: { oldPassword: string; newPassword: string }) => Promise<{ mensaje: string; error?: boolean }>;
  }
  export type User = {
    id: number;
    name: string;
    password: string;
    email: string;
    phone: string;
    website: string;
    company: string;
}

export type UserList = User[];