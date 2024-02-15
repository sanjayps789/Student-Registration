import React, { useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { registerAPI } from '../services/allAPI'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const [studentData, setStudentData] = useState({
    firstname: "", lastname: "", address: "", email: "", gender: "", mobile: "", password: "", dob: "", course: ""
  })
  const [selectedGender, setSelectedGender] = useState("")
  const [loading, setLoading] = useState(false)
  const handleOptionChange = (e) => {
    setSelectedGender(e.target.value)
  }
  useEffect(() => {
    setStudentData({ ...studentData, gender: selectedGender })
  }, [selectedGender])

  const handleRegister = async (e) => {
    e.preventDefault()
    const { firstname, lastname, address, email, gender, mobile, password, dob, course } = studentData
    if (!firstname || !lastname || !address || !email || !gender || !mobile || !password || !dob || !course) {
      alert("please fill the form Completely!!!")
    } else {
      try {
        const result = await registerAPI(studentData)
        if (result.status === 200) {
          alert("Registered Successfully")
          setLoading(true)
          setStudentData({ firstname: "", lastname: "", address: "", email: "", gender: "", mobile: "", password: "", dob: "", course: "" })
          setTimeout(() => {
            navigate("/view")
          }, 2000)

          console.log(result.data)
        } else {
         alert(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  const handleClose = () =>{
    setStudentData({ firstname: "", lastname: "", address: "", email: "", gender: "", mobile: "", password: "", dob: "", course: "" })
    navigate("/")
  }
  console.log(studentData);
  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5'>
      <div className='w-100 d-flex align-items-center justify-content-center'>
        <div className="container" >
          <div className='card shadow'>
            <div className="row" >
              <div className="col-lg-4 col-md-4 bg-primary py-4">
                <div className='d-flex align-items-center  flex-column justify-content-evenly'>
                  <img className='img-fluid w-100' src="https://i.postimg.cc/rmkTRGfv/college-students-pana.png" alt="" />
                  <h1 className='text-center'>Welcome</h1>
                  <p className='px-5' style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo  </p>
                  <div onClick={handleClose} className='text-center mt-4'><button className="btn btn-light px-5">Back</button></div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 bg-light p-2">
                <h1 className='text-black text-center'>Apply as a Student</h1>
                <Form>
                  <div className="row align-items-start p-3">
                    <div className="col-lg-6">
                      <div className='mb-4'>
                        <Form.Label className='text-black'>First Name</Form.Label>
                        <Form.Control value={studentData.value} type="text" onChange={e => setStudentData({ ...studentData, firstname: e.target.value })} />
                      </div>
                      <div className='mb-3'>
                        <Form.Label className='text-black'>Last Name</Form.Label>
                        <Form.Control value={studentData.value} type="text" onChange={e => setStudentData({ ...studentData, lastname: e.target.value })} />
                      </div>

                      <div className='mb-3'>
                        <Form.Label className='text-black'>Address</Form.Label>
                        <Form.Control value={studentData.value} type="text" onChange={e => setStudentData({ ...studentData, address: e.target.value })} />
                      </div>

                      <div className='mb-3'>
                        <Form.Label className='text-black'>Email</Form.Label>
                        <Form.Control value={studentData.value} type="text" onChange={e => setStudentData({ ...studentData, email: e.target.value })} />

                      </div>

                      <div className='mb-3'>
                        <h6 className='text-black'>Gender</h6>
                        <Form.Label className='text-black mx-3'>Male</Form.Label>
                        <input type="radio"
                          name='options'
                          value="Male"
                          checked={selectedGender === "Male"}
                          onChange={handleOptionChange} />

                        <Form.Label className='text-black mx-3'>Female</Form.Label>
                        <input type="radio"
                          name='options'
                          value="Female"
                          checked={selectedGender === "Female"}
                          onChange={handleOptionChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className='mb-4'>
                        <Form.Label className='text-black'>Mobile</Form.Label>
                        <Form.Control value={studentData.value} type="text" onChange={e => setStudentData({ ...studentData, mobile: e.target.value })} />
                      </div>

                      <div className='mb-3'>
                        <Form.Label className='text-black'>Password</Form.Label>
                        <Form.Control value={studentData.value} type="text" onChange={e => setStudentData({ ...studentData, password: e.target.value })} />
                      </div>

                      <div className='mb-3'>
                        <Form.Label className='text-black'>Date of Birth</Form.Label>
                        <Form.Control value={studentData.value} type="Date" onChange={e => setStudentData({ ...studentData, dob: e.target.value })} />
                      </div>

                      <div className='mb-3'>
                        <Form.Group>
                          <Form.Label className='text-black'>Course</Form.Label>
                          <Form.Select value={studentData.value} aria-label="Default select example" onChange={e => setStudentData({ ...studentData, course: e.target.value })}>
                            <option ></option>
                            <option value="Science" className='text-black' >Science</option>
                            <option value="Commerce" className='text-black' >Commerce</option>
                            <option value="Humanities" className='text-black' >Humanities</option>
                          </Form.Select>
                        </Form.Group>
                      </div>

                      <div className="text-center">
                        <div className="btn btn-primary mt-5" onClick={handleRegister}>Register
                          <span> {loading && <Spinner animation="border" variant="light" />}</span></div>
                      </div>

                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register