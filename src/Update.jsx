import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  let[student,setStudent]=useState({
    stuname:'',
    stuemail:''
  })
  let {stuname,stuemail}=student

  let navigate=useNavigate()
  let {id}=useParams();
  console.log(id);
  let getApi = async ()=>{
    let {data}= await axios.get (" http://localhost:5000/student/" +id)
    setStudent(data)
  }
  useEffect(() =>{
    try{
        getApi()
    }catch(e){
        console.log(e);
    }
  },[]);
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
      axios.put(" http://localhost:5000/student/"+id,payload);
      navigate("/ViewAll");
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
    
    
    <form onSubmit={handleSubmit}>
        <legend>UPDATE STUDENT</legend>
      <div>
        <input type="text"placeholder='enter name'name='stuname'value={stuname}  onChange={handleChange} />

      </div>
      <div>
        <input type="email"placeholder='email' name='stuemail' value={stuemail} onChange={handleChange}  />
      </div>
      <button>UPDATE STUDENT</button>
    </form>
    </>
  )
}

export default Update