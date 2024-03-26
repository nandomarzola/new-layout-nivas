import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import Logo from "./components/Logo"

function App() {

  return (
    <>
      <Logo urlImg="https://img.freepik.com/vetores-gratis/menu-logotipo-design-grafico_24908-54835.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais" alt='Logo' />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
