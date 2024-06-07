import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const AppLayout = () => {
  return (
    <div className="sm-block flex overflow-hidden h-screen">
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default AppLayout
