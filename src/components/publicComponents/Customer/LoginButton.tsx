interface Props {
    name: string
    action: (e: React.FormEvent<HTMLButtonElement>) => void;
}
//aqui van las props
export const LoginButton = (props: Props) => {
  return (
    <>
      <button className="bg-gradient-to-r from-[#32E6FF] via-[#D9F1FF] to-[#30E6FF] text-black font-bold py-2 px-4 rounded-md shadow-lg text-sm md:text-base lg:text-lg transition-all duration-1000 animate-blurred-fade-in w-52" onClick={props.action}>{props.name}</button>
    </>
  )
}