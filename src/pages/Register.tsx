import { useRef, useState, useEffect } from "react";
//import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonRegister} from "../components/ButtonRegister";
import { Techone } from "../components/Techone";
import { InfoScreen } from "../components/InfoScreen";
import { InfoScreen3 } from "../components/InfoScreen3";
import { Logos } from "../components/Logos";

const Register = () => {
    //aqui se pasan las props

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const userRef = useRef<HTMLInputElement | null>(null);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);  

    useEffect(() => {
        userRef.current?.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        setValidMatch(matchPwd === pwd);
    }, [pwd, matchPwd]);

    
  return (
    <>

    <div className="flex col md:flex-row">

        <div className="flex flex-col justify-center w-full ml-10 space-y-6 ml-32">

            <Techone name = "TECHONE"/>
            <InfoScreen name="Regístrate y empieza a gestionar de la mejor manera tu negocio"/>
            <InfoScreen3 name="Puedes también registrarte por medio de:"/>
            <Logos />

        </div> 

        <div className="flex justify-center items-center min-h-screen w-full ">
            <section className="w-full md:w-3/4 lg:w-1/2 xl:w-2/3 p-4 ">

            <h1 className="text-3xl font-bold text-white rounded-md mb-4">Registro</h1>

                <section>
                    <div className="flex flex-col justify-center w-full max-w-lg mt-5 bg-[#82F7FF]/[17%] rounded-md border border-[#38FF88] p-4 ">
        
                     <form className="flex flex-col justify-center w-full max-w-lg mt-0 space-y-3 rounded-md text-white">
        
                        <label htmlFor="username">Nombre:</label>
                        <input className="rounded-md bg-[#D9D9D9] h-10 text-black/80 p-2"
                        type="text"
                        id="username"
                        placeholder="Jhon Doe"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        required
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        />

                        <label htmlFor="empresa">Empresa:</label>
                        <input className="rounded-md bg-[#D9D9D9] h-10 text-black/50 p-2" 
                        type="text" 
                        id="empresa" 
                        placeholder="Tienda de ejemplo..."
                        ref={userRef} 
                        autoComplete="off" 
                        onChange={(e) => setUser(e.target.value)} 
                        required 
                        onFocus={() => setUserFocus(true)} 
                        onBlur={() => setUserFocus(false)}/>

                        <label htmlFor="email"> Correo Electrónico:</label>
                        <input className="rounded-md bg-[#D9D9D9] h-10 text-black/50 p-2"
                        type="email" 
                        id="email" 
                        placeholder="example@example.com"
                        onChange={(e) => setUser(e.target.value)} 
                        required 
                        onFocus={() => setUserFocus(true)} 
                        onBlur={() => setUserFocus(false)}/>


                        <label htmlFor="password">Contraseña:</label>
                        <input className="rounded-md bg-[#D9D9D9] h-10 text-black/50 p-2"
                        type="password" 
                        id="password" 
                        placeholder="password.123"
                        onChange={(e) => setPwd(e.target.value)} 
                        required 
                        onFocus={() => setPwdFocus(true)} 
                        onBlur={() => setPwdFocus(false)}/>


                        <label htmlFor="confirm_pwd">Confirmar Contraseña:</label>
                        <input className="rounded-md bg-[#D9D9D9] h-10 text-black/50 p-2"
                        type="password" 
                        id="confirm_pwd" 
                        placeholder="password.123"
                        onChange={(e) => setMatchPwd(e.target.value)} 
                        required/>


                     </form>
                     
                        <section className="mt-4">
                            <ButtonRegister name="Registrarme"/>
                        
                            <p className="text-white">¿Ya tienes una cuenta? <a href="#" className="text-[#2BFF7F]">Inicia Sesión</a></p>
                        </section>
                    </div>
                </section>
            </section>
        </div>
    </div>

    </>

  )
}

export default Register
