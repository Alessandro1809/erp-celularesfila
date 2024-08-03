import { Link } from "react-router-dom"

//Ejemplo de uso de una interface
interface Props {
    name: string
}
//aqui van las props
export const ButtonLogin = (props: Props) => {
  return (
    <>
        <button className="bg-gradient-to-r from-gray-100 to-cyan-500 text-black font-bold py-5 px-12 rounded-md shadow-lg my-3 text-sm  sm:m-0 md:text-base lg:text-lg transition-all duration-1000 anim">{props.name}</button>
    </>
  )
}
