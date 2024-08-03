import { useRef, useState, useEffect } from "react";
import { ButtonRegister } from "../components/register/ButtonRegister";
import { Techone } from "../components/register/Techone";
import { InfoScreen } from "../components/register/InfoScreen";
import { InfoScreen3 } from "../components/register/InfoScreen3";
import { Logos } from "../components/register/Logos";
import { type User } from "../types/TypeLogin";

const Register = () => {
    const userUnknown: User = {
        id: 0,
        name: '',
        email: '',
        address: '',
        phone: '',
        website: '',
        company: ''
    };
    
    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const userRef = useRef<HTMLInputElement | null>(null);
    const [user, setUser] = useState(userUnknown);
    const [pwd, setPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current?.focus();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const isValidUser = USER_REGEX.test(user.name);
        const isValidEmail = EMAIL_REGEX.test(user.email);
        const isValidPwd = PWD_REGEX.test(pwd);
        const isPwdMatch = pwd === matchPwd;

        if (!isValidUser || !isValidEmail) {
            setErrMsg("Parece que algunos de tus datos son inválidos");
            return;
        }
        if (isValidPwd != isPwdMatch) {
            setErrMsg("Las contraseñas no coinciden");
            return;
        }

        setErrMsg('');
       
        console.log("Usuario registrado con éxito:", user);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row py-20 animate-blurred-fade-in">
                <div className="flex flex-col justify-center w-full space-y-6 mx-auto md:ml-32 animate-blurred-fade-in">
                    <Techone name="TECHONE" />
                    <span className="text-center md:text-left">
                        <InfoScreen name="Regístrate y empieza a gestionar de la mejor manera tu negocio" />
                        <InfoScreen3 name="Puedes también registrarte por medio de:" />
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
                                        className="rounded-md bg-[#D9D9D9] h-10 text-black/80 p-2"
                                        type="text"
                                        id="name"
                                        placeholder="Jhon Doe"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        required
                                    />

                                    <label htmlFor="empresa">Empresa:</label>
                                    <input 
                                        className="rounded-md bg-[#D9D9D9] h-10 text-black/50 p-2" 
                                        type="text" 
                                        id="empresa" 
                                        placeholder="Tienda de ejemplo..."
                                        autoComplete="off" 
                                        onChange={(e) => setUser({ ...user, company: e.target.value })}
                                        required 
                                    />

                                    <label htmlFor="email">Correo Electrónico:</label>
                                    <input 
                                        className="rounded-md bg-[#D9D9D9] h-10 text-black/50 p-2"
                                        type="email" 
                                        id="email" 
                                        placeholder="example@example.com"
                                        onChange={(e) => setUser({ ...user, email: e.target.value })} 
                                        required 
                                    />

                                    <label htmlFor="password">Contraseña:</label>
                                    <input 
                                        className="rounded-md bg-[#D9D9D9] h-10 text-black/50 p-2"
                                        type="password" 
                                        id="password" 
                                        placeholder="password.123"
                                        onChange={(e) => setPwd(e.target.value)} 
                                        required 
                                    />

                                    <label htmlFor="confirm_pwd">Confirmar Contraseña:</label>
                                    <input 
                                        className="rounded-md bg-[#D9D9D9] h-10 text-black/50 p-2"
                                        type="password" 
                                        id="confirm_pwd" 
                                        placeholder="password.123"
                                        onChange={(e) => setMatchPwd(e.target.value)} 
                                        required
                                    />
                                    {errMsg && <p className="text-red-500">{errMsg}</p>}
                                    <ButtonRegister name="Registrarme" />
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
