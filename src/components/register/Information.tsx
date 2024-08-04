interface Props {
    name: string
}

export const Information = (props: Props) => {
  return (
   <>
    <h4 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-white p-2 transition-all duration-1000 ">{props.name}</h4>

   </>
  )
}
