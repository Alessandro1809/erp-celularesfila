//Ejemplo de uso de una interface
interface Props {
    name: string
    action: (e: React.FormEvent<HTMLButtonElement>) => void;
}
//aqui van las props
export const ButtonRegister = (props: Props) => {
  return (
    <>
      <button className="bg-gradient-to-r from-gray-100 to-[#DBFF5E] text-black font-bold py-2 px-4 rounded-md shadow-lg my-3 text-sm md:text-base lg:text-lg transition-all duration-1000 animate-blurred-fade-in w-32" onClick={props.action}>{props.name}</button>
    </>
  )
}