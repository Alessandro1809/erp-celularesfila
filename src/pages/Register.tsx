import {  useState } from "react";
import { ButtonRegister } from "../components/register/ButtonRegister";
import { Title } from "../components/register/Title";
import { Subtitle } from "../components/register/Subtitle";
import { Information } from "../components/register/Information";
import { Logos } from "../components/register/Logos";
import { type User } from '../types/TypeLogin';
import clienteAxios from "../config/axios";
import { AxiosResponse } from "axios";
import '../Register.css';

const Register = () => {
    interface ApiResponse {
        success: boolean;
        message: string;
        // otros campos que esperas recibir
      }
    const userUnknown: User = {
        id: 0,
        name: '',
        password: '',
        email: '',
        phone: '',
        website: '',
        company: ''
    };
    
    // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    // const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  
    const [user, setUser] = useState(userUnknown);
    
    const [matchPwd, setMatchPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        const { name, email,company, password } = user;
    
        const isPwdMatch = password === matchPwd;

        if (  name === '' || email === '' || company === ''){
            console.log(user);
             
            setErrMsg("Parece que algunos de tus datos están incompletos");
            return;
        }
        if (!isPwdMatch) {
            setErrMsg("Las contraseñas no coinciden");
            return;
        }
        if (password.length<6) {
            setErrMsg("La contraseña debe tener más de 6 caracteres");
            return;
        }
        
       try {
        const {data}: AxiosResponse<ApiResponse> = await clienteAxios.post('/admin', user);
        setErrMsg('Usuario creado exitosamente, revisa tu email para activar tu cuenta, e inicia sesión');
       } catch (error) {
        console.log(error);
        
       }
        
    };

    return (
        <>
            <div className="flex flex-col md:flex-row py-20 animate-blurred-fade-in">
                <div className="flex flex-col justify-center w-full space-y-6 mx-auto md:ml-32 animate-blurred-fade-in">
                    <Title name="TECHONE" />
                    <span className="text-center md:text-left">
                        <Subtitle name="Regístrate y empieza a gestionar de la mejor manera tu negocio" />
                        <Information name="Puedes también registrarte por medio de:" />
                    </span>
                    <Logos />
                </div> 

                <div className="flex justify-center items-center h-auto w-full animate-blurred-fade-in">
                    <section className="w-full md:w-full lg:w-full xl:w-full p-4">
                        <section className="flex flex-col">
                            <div className="flex flex-col justify-center w-full mt-5 bg-[#82F7FF]/[17%] rounded-md border border-[#38FF88] p-4">
                                <p className="text-3xl font-bold text-white rounded-md mb-4">Registro</p>
                                <form 
                                    className="flex flex-col justify-center w-full mt-0 space-y-3 rounded-md text-white p-4"
                                    onSubmit={handleSubmit}
                                >
                                    <label htmlFor="name">Nombre:</label>
                                    <input 
                                        className="rounded-md bg-[#D9D9D9] h-10 text-black p-2"
                                        type="text"
                                        id="name"
                                        placeholder="Jhon Doe"
                                        autoComplete="off"
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        required
                                    />

                                    <label htmlFor="empresa">Empresa:</label>
                                    <input 
                                        className="rounded-md bg-[#D9D9D9] h-10 text-black p-2" 
                                        type="text" 
                                        id="empresa" 
                                        placeholder="Tienda de ejemplo..."
                                        autoComplete="off" 
                                        onChange={(e) => setUser({ ...user, company: e.target.value })}
                                        required 
                                    />

                                    <label htmlFor="email">Correo Electrónico:</label>
                                    <input 
                                        className="rounded-md bg-[#D9D9D9] h-10 text-black p-2"
                                        type="email" 
                                        id="email" 
                                        placeholder="example@example.com"
                                        onChange={(e) => setUser({ ...user, email: e.target.value })} 
                                        required 
                                    />

                                    <label htmlFor="password">Contraseña:</label>
                                    <input 
                                        className="rounded-md bg-[#D9D9D9] h-10 text-black p-2"
                                        type="password" 
                                        id="password" 
                                        placeholder="password.123"
                                        onChange={(e) => setUser({ ...user, password: e.target.value })} 
                                        required 
                                    />

                                    <label htmlFor="confirm_pwd">Confirmar Contraseña:</label>
                                    <input 
                                        className="rounded-md bg-[#D9D9D9] h-10 text-black p-2"
                                        type="password" 
                                        id="confirm_pwd" 
                                        placeholder="password.123"
                                        onChange={(e) => setMatchPwd(e.target.value)} 
                                        required
                                    />
                                    {errMsg && <p className="text-cyan-300 text-2xl font-medium bg-black/70 rounded-lg p-2">{errMsg}</p>}
                                    <ButtonRegister name="Registrarme" action={handleSubmit}/>
                                </form>
                                <section className="mt-4">
                                    <p className="text-white">¿Ya tienes una cuenta? <a href="/login" className="text-[#2BFF7F]">Inicia Sesión</a></p>
                                </section>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Register;
