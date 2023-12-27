
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Style.css';

export default function Show() {
  const history = useNavigate();
  const [column, setColumn] = useState([]);
  const [record, setRecord] = useState([]);
  const [Search, setSearch] = useState('');


  useEffect(() => {
    axios.get('https://apigenerator.dronahq.com/api/G_vLg64i/Student').then((res) => {
      setColumn(Object.keys(res.data[0]));
      setRecord(res.data);
    });
  }, []);

  function handleDelete(id) {
    const confirmDelete = window.confirm('Do you want to delete?');
    if (confirmDelete) {
      axios
        .delete('https://apigenerator.dronahq.com/api/G_vLg64i/Student/' + id)
        .then(() => {
          alert('Record has been deleted');
          history('/show');
        })
        .catch((err) => console.log(err));
    }
  }


  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10); 
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = record.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
    
            <div className="row">
         <div className="col-md-6">
           <h1>HISTORY</h1>
         </div>
         <div className="col-md-6">
           <Link to='/  '>
             <button className='btn bg-info w-25 mt-2' id='create' >Create</button>
           </Link>
         </div>
       </div>
      <div className="row">
         <form>
           <input type="text" placeholder='Search Here...' id='search' onChange={e => setSearch(e.target.value)} />
         </form>
       </div>
      <div className="row">
        <table>
          <thead>
            <tr>
              {column.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRecords
              .filter((elem) => {
                return Search.toLowerCase() === '' ? elem : elem.Name.toLowerCase().includes(Search);
              })
              .map((d, i) => (
                <tr key={i}>
                  
                  <td>{d.Name}</td>
                  <td>{d.MobileNumber}</td>
                  <td>{d.FatherName}</td>

                  <td>{d.BirthDate}</td>
                  <td>{d.Gender}</td>
                  <td>{d.id}</td>
                  <td>
                    <Link to={`/update/${d.id}`} > <button className='btn bg-success ' id='update' >Update</button> </Link>

                  </td>
                  <td>

                    <button onClick={e => handleDelete(d.id)} className='btn bg-danger w-75 ' id='delete' >Delete</button>                 </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(record.length / recordsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className='active mt-2 ms-2 bg-primary text-white' id='pagination'  >
            {index + 1}
          </button>
          
        ))}
      </div>
    </div>
  );
}

