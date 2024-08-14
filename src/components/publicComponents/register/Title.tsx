
interface Props {
    name: string
}
export const Title = (props: Props) => {
  return (
    <>
        <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-[#97FFE0] to-[#01D1FF] text-transparent bg-clip-text p-2 transition-all duration-1000 text-center md:text-left">{props.name}</h1>
    </>
  )
}

