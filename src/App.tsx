import { Outlet } from "react-router-dom"
import Logo from "./components/Logo"

function App() {

  return (
    <>
      <Logo urlImg="images/logoVitoria.jpeg" />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App
