import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import Logo from "./components/Logo"

function App() {

  return (
    <>
      <Logo urlImg="images/logoVitoria.jpeg" />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
