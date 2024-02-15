import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Home() {
  return (
   <>
      <Header/>
      <div className='bg-primary w-100 d-flex align-items-center justify-content-center' style={{height:'88vh'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <h1>Education</h1>
                <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia eligendi doloribus harum? Incidunt esse pariatur alias architecto, dolorum nesciunt ipsum magnam facilis temporibus! Temporibus id impedit nihil  error saluta magnum.</p>
              <div className="d-flex align-items-center">
                <span>New Student? Click here to </span>
                <Link to={'/register'} className="btn btn-light ms-5 ">Register</Link>
              </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <img className='img-fluid w-100' src="https://i.postimg.cc/28LYfD4H/img-removebg-preview.png" alt="" />
              </div>
            </div>
          </div>
      </div>
   </>
  )
}

export default Home