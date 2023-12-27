import React,{useState} from 'react'
import Navbar from "./Navbar"
import axios  from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  let history = useNavigate();
  const [inputData, setInputData] = useState({ name:"",message:"",Email:"" })

const handleSubmit =(event)=>{
  event.preventDefault();
  axios.post('https://apigenerator.dronahq.com/api/kRgg5eBW/contact', inputData)
    .then(res => {
      alert("ThankYou For Connecting Us :)");
      history('/contact');
    }).catch(err => console.log(err))

}

  return (
    <div>
        <Navbar/>
        <div className="row">
          <div className="col-md-6  mt-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59042.1470954317!2d77.0497814835488!3d22.34856132699165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d70da30805abf%3A0x1368c14a9092d58b!2sHarda%2C%20Madhya%20Pradesh%20461331!5e0!3m2!1sen!2sin!4v1702177902928!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
         <div className="col-md-6">
          <div className="contact-form">
            <center>
            <h1 id='contact'>Contact</h1>
            </center>
            <form >
            <label id='name' >Name</label><br />
            <input type="text"  id="box" onChange={e => setInputData({ ...inputData, name: e.target.value })} /><br />
            <label id='name' >Email</label><br />
            <input type="text" id="box" onChange={e => setInputData({ ...inputData, Email: e.target.value })} /><br />
            <label id='name' >Message</label><br />
            <textarea  id="box" onChange={e => setInputData({ ...inputData, message: e.target.value })}></textarea><br />
            <button className='contact-submit btn bg-primary text-light fw-bold'  onClick={handleSubmit}>SUBMIT</button>
            </form>
            
          </div>
         </div>
        </div>
        
    </div>
  )
}
