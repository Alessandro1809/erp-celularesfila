import { ButtonLogin } from './ButtonLogin';
import Alerta from './Alerta';
import useLogin from '../../../hooks/useLogin';

const FormLogin: React.FC = () => {

    const { email, setEmail, password, setPassword, alerta, handleSubmit } = useLogin();
   
    return (
        <>

        {alerta.mensaje && <Alerta alerta={alerta} />}
        <p className="text-[#DBFF5E] text-3xl font-sans m-2 font-bold rounded-md">Inicia Sesión</p>
        <form className="flex flex-col justify-center w-full mt-0 space-y-3 rounded-md text-[#DBFF5E] p-4"
        onSubmit={handleSubmit} >

                <label htmlFor="email">Correo electrónico:</label>
                <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder="Ingrese su correo electrónico" 
                className='rounded-md bg-[#D9D9D9] h-10 text-black p-2' />

                <label htmlFor="password">Contraseña:</label>
                <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder="Ingrese su contraseña" 
                className='rounded-md bg-[#D9D9D9] h-10 text-black p-2' />
                
        <ButtonLogin name="Iniciar Sesión"/> 
        </form>
        </>
    );
};

export default FormLogin;
