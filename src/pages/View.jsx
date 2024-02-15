import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Table } from 'react-bootstrap'
import { getallStudentsAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function View() {
  const [allStudentsData,setAllStudentsData] = useState([])
  const getAllStudentsData = async() =>{
    try{
      const result = await getallStudentsAPI()
      if(result.status===200){
        setAllStudentsData(result.data)
       }
    }catch(err){
      console.log(err);
    }
  }
  console.log(allStudentsData);
  useEffect(()=>{
    getAllStudentsData()
  },[])
  return (
    <div>
      <Header/>
      <div className="container py-5" responsive="lg">
      <Table striped bordered hover responsive="md" >
      <thead >
        <tr >
          <th className='bg-primary text-light'>First Name</th>
          <th className='bg-primary text-light'>Last Name</th>
          <th className='bg-primary text-light'>Address</th>
          <th className='bg-primary text-light'>E-mail</th>
          <th className='bg-primary text-light'>Mobile</th>
          <th className='bg-primary text-light'>DOB</th>
          <th className='bg-primary text-light'>Gender</th>
          <th className='bg-primary text-light'>Course</th>
        </tr>
      </thead>
     
      {allStudentsData.length>0 ?
      allStudentsData.map((student,index)=>(
        <tbody key={index}>
        <tr>
           <td>{student?.firstname}</td>
           <td>{student?.lastname}</td>
           <td>{student?.address}</td>
           <td>{student?.email}</td>
           <td>{student?.mobile}</td>
           <td>{student?.password}</td>
           <td>{student?.dob}</td>
           <td>{student?.course}</td>
         </tr>
       </tbody>
      )):<h1>No students Registered Yey</h1>
       }
    </Table>
    <div className='text-center'><Link to={'/'} className="btn btn-primary">Back</Link></div>

      </div>
    </div>
  )
}

export default View