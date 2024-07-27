//Ejemplo de uso de una interface
interface Props {
    name: string
}
//aqui van las props
export const ButtonRegister = (props: Props) => {
  return (
    <>
      <button className="bg-gradient-to-r from-gray-100 to-green-500 text-black font-bold py-2 px-4 rounded-md shadow-lg my-3 text-sm md:text-base lg:text-lg">{props.name}</button>
    </>
  )
}