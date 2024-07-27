//Ejemplo de uso de una interface
interface Props {
    name: string
}
//aqui van las props
export const ButtonLogin = (props: Props) => {
  return (
    <>
      <button className=" md:w-1/2 bg-blue-600 text-white p-1 rounded font-bold uppercase m-2 hover:bg-blue-700">{props.name}</button>
    </>
  )
}
