import { Outlet } from "react-router-dom"
import Header from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function Root (){
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

export default Root