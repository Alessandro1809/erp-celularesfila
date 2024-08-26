import { ButtonLogin } from './ButtonLogin';
import Alerta from './Alerta';
import useLogin from '../../../hooks/useLogin';

const FormLogin: React.FC = () => {

    const { email, setEmail, password, setPassword, alerta, handleSubmit } = useLogin();
   
    return (
        <>
            {alerta.mensaje && <Alerta alerta={alerta} />}
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                <div className='flex flex-col w-full md:w-4/5'>
                    <label htmlFor="email" className="text-[#DBFF5E] text-left text-lg m-1 font-sans font-bold">Correo electrónico:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Ingrese su correo electrónico" 
                        className='rounded w-full p-2'  
                    />
                </div>
                <div className='flex flex-col w-full md:w-4/5'>
                    <label htmlFor="password" className="text-[#DBFF5E] text-left text-lg m-1 font-sans font-bold">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Ingrese su contraseña" 
                        className='rounded w-full p-2' 
                    />
                </div>
                <div className='flex justify-center w-full mt-4'>
                    <ButtonLogin name="Iniciar Sesión" />
                </div>
            </form>
        </>
    );
};

export default FormLogin;
