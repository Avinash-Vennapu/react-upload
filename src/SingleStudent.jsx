import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {useState} from 'react'

const SingleStudent = () => {
  let [student,setStudent]=useState('')
  let navigate=useNavigate()
  let {id}=useParams()
  console.log(id)
    let getApi=async ()=>{
        let {data}=await axios.get("http://localhost:5000/student/" + id);
        setStudent(data)
    }
    console.log(student)
    let gotohome=()=>{
      navigate("/")
    }
    let goback=()=>{
      navigate(-1);
    }
    useEffect(()=>{
         try{

            getApi()
         }
         catch(e){
            console.log(e);

         }

    },[]);
  return (
    <>
    <section className='mainStuContainer'>
        <h1>details of {student.stuname}</h1>
        <article className='subStucontainer'>
          <h1>SL.NO :{student.id}</h1>
          <h1>Name :{student.stuname}</h1>
          <h1>Email :{student.stuemail}</h1>
          <div>
            <button onClick={gotohome}>Go to Home</button>
            <button onClick={goback}>GO-Back</button>
          </div>
        </article>
    </section>
    </>
  )
}

export default SingleStudent
