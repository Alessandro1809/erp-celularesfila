interface Props {
    name: string
}

export const InfoScreen = (props: Props) => {
  return (
   <>
    <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white p-2 transition-all duration-1000">{props.name}</h2>
   </>
  )
}

