import React from 'react'
import "./Style.css"
import img from "./image/business-min.gif"
import Form from "./Add"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"



export default function Home() {


    return (
        <div className="container">
            <Navbar/>
            <div className="row">
            </div>
            <div className="row">
                <div className="col-md-6 " id='div-1' >
                    <img src={img} className='h-75 ' id='img' alt="img" /><br />
                    <h6>  <input type="radio" className='ms-5' /> Student</h6>
                </div>

                <div className="col-md-6 " id='div-2'>
                    <h6 id='parent'>  <input type="radio" /> Parent</h6>
                    <Link to='/show'>
                        <button className='btn bg-primary text-white' id='Show-data'>Show Data</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <Form />
            </div>
        </div>
    )
}
