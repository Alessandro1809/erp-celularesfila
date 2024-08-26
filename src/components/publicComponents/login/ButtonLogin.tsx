
interface Props {
    name: string;
    onClick?: () => void;
}
//aqui van las props
export const ButtonLogin : React.FC<Props> = ({ name, onClick }) => {
  return (
    <>
      <button onClick={onClick} 
      className=" bg-gradient-to-r from-[#01D1FF] via-white to-[#01D1FF] text-black font-bold py-2 px-4 rounded-md shadow-lg my-3 text-sm md:text-base lg:text-lg transition-all duration-1000 anim">{name}</button>
    </>
  )
}
