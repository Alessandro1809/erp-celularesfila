//Ejemplo de uso de una interface
interface Props {
    name: string
}
//aqui van las props
export const ButtonLogin = (props: Props) => {
  return (
    <>
      <button className="w-full bg-blue-600 text-white p-3 rounded-full font-bold uppercase hover:bg-blue-700">{props.name}</button>
    </>
  )
}
