import React from 'react'
import "./Style.css"
import Navbar from "./Navbar"
import Aboutimg from "./image/Billdu_How-to-write-an-invoice-for-freelance-work-1.png"

export default function About() {
    return (
        <div className="container">
            <Navbar />
            <div className="row">
                <div className="col-md-6 ">
                    <img src={Aboutimg} alt="About-img" className='h-25 mt-5' />
                </div>
                <div className="col-md-6 ">
                    <h5 className='ms-5' id='about'>Welcome to the world of React, where dynamic web development meets seamless user interfaces. Whether you're a seasoned developer or just starting your coding journey, React empowers you to build interactive and efficient web applications with ease. With its component-based architecture, React simplifies the development process, allowing you to create reusable and modular UI elements. Say goodbye to traditional page refreshes and embrace the power of virtual DOM for lightning-fast updates. Dive into the vibrant React ecosystem, equipped with a robust community, extensive documentation, and a wealth of third-party libraries. Elevate your web development experience with React – where building modern, responsive, and engaging user interfaces is not just a possibility, but a delightful reality.
                    </h5>

                </div>
            </div>
        </div>
    )
}
