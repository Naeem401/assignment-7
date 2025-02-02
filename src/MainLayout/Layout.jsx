import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";


export default function Layout() {
  return (
    <>
    <div>
        <NavBar/>
    <Outlet/>
    </div>
    
    </>
  )
}