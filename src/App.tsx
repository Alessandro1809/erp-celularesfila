import { Route,Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { ForgotPassword } from "./pages/ForgotPassword";
import { NewPassword } from "./pages/NewPassword";
import AuthLayout from "./Layout/AuthLayout";
import Register from "./pages/Register";
function App() {
  

  return (
    <>
    <BrowserRouter>
      
          <Routes>
          {/* rutas publicas */}
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Register/>}/>
              <Route path='login' element={<Login/>}/>
            </Route>

            <Route path='/ForgotPassword' element={<AuthLayout/>}>
              <Route index element={<ForgotPassword/>}/>
            </Route>

            <Route path='/NewPassword' element={<AuthLayout/>}>
              <Route index element={<NewPassword/>}/>
            </Route>
          
            
            {/* <Route path='admin' element={<RutaProtegida/>}>
              <Route index element={<AdministrarPacientes/>} />
              <Route path='perfil' element={<EditarPerfil/>}/>
              <Route path='cambiar-password' element={<CambiarPasswoord/>}/>
            </Route>      */}

          </Routes>
        
    </BrowserRouter>
    </>
  )
}

export default App
