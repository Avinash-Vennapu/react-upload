import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let[student,setStudent]=useState({
    stuname:'',
    stuemail:''
  })
  let {stuname,stuemail}=student

  let navigate=useNavigate()
  let handleSubmit=e=>{
    e.preventDefault()
    console.log(student)
    try{
    if(stuname==="" && stuemail===""){
      alert("please fill both the fields")
    }else if(stuname===""){
      alert("stufield should not empty")
    }else if(stuemail===""){
      alert("stuemail should not empty")

    }else{
      let payload={
        stuname,
        stuemail

      };
      axios.post(" http://localhost:5000/student",payload);
      navigate("/ViewAll")
    }
     
      
    }
    catch(e){
      console.log(e)

    }
    finally{
      setStudent({

        stuname:'',
        stuemail:''
      })
    }
  }
  let handleChange=(event)=>{
    let{name,value}=event.target
    setStudent({...student,[name]:value})
    
  }
  return (
    
    <>
    <NavBar/>
    <h1>welcome to homepage</h1>
    
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text"placeholder='enter name'name='stuname'value={stuname}  onChange={handleChange} />

      </div>
      <div>
        <input type="email"placeholder='email' name='stuemail' value={stuemail} onChange={handleChange}  />
      </div>
      <button>ADD STUDENT</button>
    </form>
    </>
  )
}

export default Home