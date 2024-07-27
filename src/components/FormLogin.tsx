import React, { useState } from 'react';
import { ButtonLogin } from './ButtonLogin';

const FormLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica de autenticación con el email y la contraseña ingresados
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-4 m-4 justify-center w-5/6 md:w-full'>
            <div className='flex flex-col'>
                <label htmlFor="email" className="text-white text-left text-lg m-1 font-sans font-bold">Correo electronico:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} className='rounded md:w-4/5 m-1'/>
            </div>
            <div className='flex flex-col '>
                <label htmlFor="password" className="text-white text-left text-lg m-1 font-sans font-bold">Contraseña:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} className='rounded md:w-4/5 m-1'/>
            </div>
            <ButtonLogin name="Iniciar Sesión" />
        </form>
    );
};

export default FormLogin;