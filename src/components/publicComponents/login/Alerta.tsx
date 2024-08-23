

const Alerta = ({alerta}: { alerta: any }) => {
    return (
        <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-br text-center m-2 p-3 rounded-md uppercase text-white font-bold text-sm mb-2`}>
            {alerta.mensaje}
        </div>
    )
  };
  
  export default Alerta;
  