import { Route,Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import AuthLayout from "./Layout/AuthLayout";
import Register from "./pages/Register";
import { InicioSesion } from "./pages/InicioSesion";
function App() {
  

  return (
    <>
    <BrowserRouter>
      
          <Routes>
          {/* rutas publicas */}
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Register/>}/>
              <Route path='login' element={<InicioSesion/>}/>
            
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
