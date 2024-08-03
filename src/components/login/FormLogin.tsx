import { useState } from 'react';
import {ButtonLogin} from './ButtonLogin';

const FormLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(email)
        
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-4 m-4 justify-center w-5/6 md:w-full'>
            <div className='flex flex-col'>
                <label htmlFor="email" className="text-white text-left text-lg m-1 font-sans font-bold">Correo electrónico:</label>
                <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Ingrese su correo electrónico" className=' rounded md:w-4/5 m-1 p-1' required />
            </div>
            <div className='flex flex-col '>
                <label htmlFor="password" className="text-white text-left text-lg m-1 font-sans font-bold">Contraseña:</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Ingrese su contraseña" className='rounded md:w-4/5 m-1 p-1' required/>
            </div>
        <ButtonLogin name="Iniciar Sesión"/> 
        </form>
    );

    
};

export default FormLogin;