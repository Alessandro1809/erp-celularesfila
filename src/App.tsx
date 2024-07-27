import { Route,Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import AuthLayout from "./Layout/AuthLayout";
import { InicioSesion } from "./pages/InicioSesion";
function App() {
  

  return (
    <>
    <BrowserRouter>
      
          <Routes>
          {/* rutas publicas */}
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path='iniciar-sesion' element={<InicioSesion/>}/>
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
