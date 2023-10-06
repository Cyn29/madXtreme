import React from 'react'
import { Outlet } from "react-router-dom"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Root (){
    return (
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

export default Root