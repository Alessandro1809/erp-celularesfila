
interface Props {
    name: string;
    onClick?: () => void;
}
//aqui van las props
export const ButtonLogin : React.FC<Props> = ({ name, onClick }) => {
  return (
    <>
      <button onClick={onClick} 
      className=" bg-gradient-to-r from-gray-100 to-[#DBFF5E] text-black font-bold py-2 px-4 rounded-md shadow-lg my-3 text-sm md:text-base lg:text-lg transition-all duration-1000 animate-blurred-fade-in w-40">{name}</button>
    </>
  )
}
