import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../../hooks/Auth/useAuth"

const CustomerLayout = () => {
  const {Auth,cargando}= useAuth();
    console.log(Auth);

    if (cargando) return 'Cargando....'

  return (
    <>
    
      
      {Auth?._id ? (
      <main className="container mx-auto mt-10">
        <Outlet/>
      </main> 
      ): <Navigate to='/customer' />}
   
      
    </>
  )
}

export default CustomerLayout;