import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../../hooks/Auth/useAuth"

const ProtectedLayout = () => {
  const {Auth,cargando}= useAuth();
    console.log(Auth);

    if (cargando) return 'Cargando....'

  return (
    <>
    
      
      {Auth?._id ? (
      <main className="container mx-auto mt-10">
        <Outlet/>
      </main> 
      ): <Navigate to='/' />}
   
      
    </>
  )
}

export default ProtectedLayout;