interface Props {
    name: string
}

export const InfoScreen = (props: Props) => {
  return (
   <>
    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white p-2 ">{props.name}</h2>
   </>
  )
}

