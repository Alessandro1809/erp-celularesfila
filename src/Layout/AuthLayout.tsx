import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <> 
    
      <main>
      <div className="absolute min-h-screen w-full bg-slate-900 -z-50"><div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
      </div>
     
      <section className="z-50">
          <Outlet/>
        </section>
      </div>
      </main>
      
    </>
  )
}

export default AuthLayout;