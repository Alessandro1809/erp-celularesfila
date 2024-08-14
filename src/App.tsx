import { Route,Routes, BrowserRouter } from "react-router-dom";
import { ForgotPassword } from "./pages/publicRoutes/ForgotPassword";
import { NewPassword } from "./pages/publicRoutes/NewPassword";
import AuthLayout from "./Layout/AuthLayout";
import Register from "./pages/publicRoutes/Register";
import  Authentification  from "./pages/publicRoutes/Authentification";
import { InicioSesion } from "./pages/publicRoutes/InicioSesion";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedLayout from './Layout/ProtectedLayout';
import { AdminHome } from "./pages/privateRoutes/AdminHome";
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
