import { Route,Routes, BrowserRouter } from "react-router-dom";
import { ForgotPassword } from "./pages/admin/publicRoutes/ForgotPassword";
import { NewPassword } from "./pages/admin/publicRoutes/NewPassword";
import AuthLayout from "./Layout/admin/AuthLayout";
import Register from "./pages/admin/publicRoutes/Register";
import  Authentification  from "./pages/admin/publicRoutes/Authentification";
import { InicioSesion } from "./pages/admin/publicRoutes/InicioSesion";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedLayout from './Layout/admin/ProtectedLayout';
import { AdminHome } from "./pages/admin/privateRoutes/AdminHome";
function App() {
  

  return (
    <>
    <BrowserRouter>
      <AuthProvider>
          <Routes>
          {/* rutas publicas */}
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Register/>}/>

              <Route path='Register' element={<Register/>}/>
              <Route path='login' element={<InicioSesion/>}/>
              <Route path='/login' element={<InicioSesion/>}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path="/new-password/:token" element={<NewPassword/>}/>
              <Route path="/authentification/:token" element={<Authentification/>}/>
            </Route>

            
           <Route path='admin' element={<ProtectedLayout/>}>
           <Route index element={<AdminHome/>} />
            {/*    
              <Route path='perfil' element={<EditarPerfil/>}/>
              <Route path='cambiar-password' element={<CambiarPasswoord/>}/> */}
            </Route>     

          </Routes>
        </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
