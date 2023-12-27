import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Style.css"

export default function Update() {

    let history = useNavigate();

    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://apigenerator.dronahq.com/api/G_vLg64i/Student/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    },[])

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('https://apigenerator.dronahq.com/api/G_vLg64i/Student/' + id, data)
            .then(res => {
                alert("data updated")
                history('/show')
            })

    }

    return (
        <div className="container">
            <h1>UPDATE INFORMATION</h1>
            <form > 
                <label > Name </label><br />
                <input type="text" value={data.Name} onChange={e => setData({ ...data, Name: e.target.value })} /><br />
                <label > Mobile Number  </label><br />
                <input type="number" value={data.MobileNumber} onChange={e => setData({ ...data, MobileNumber: e.target.value })} /><br />
                <label > Father Name  </label><br />
                <input type="text" value={data.FatherName} onChange={e => setData({ ...data, FatherName: e.target.value })} /><br />
                <label > Birth Date  </label><br />
                <input type="text" value={data.BirthDate} onChange={e => setData({ ...data, BirthDate: e.target.value })} /><br/>
               <label >Gender</label><br />
                <select value={data.Gender} onChange={e => setData({ data, Gender: e.target.value })} >
                    <option  ></option>
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>
                </select><br /><br />
                <button type='submit' onClick={handleSubmit} className='btn bg-primary text-white' >Update</button>
                <Link to='/'>
                <button className='btn bg-secondary ms-2' >Back</button>
                </Link>
            </form>
        </div>
    )
}
// "homepage": "https://rgcbrajesh.github.io/student-registration-form",