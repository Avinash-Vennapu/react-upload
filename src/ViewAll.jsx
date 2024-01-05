import React, { useEffect } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Fix: Import NavLink from 'react-router-dom'

const ViewAll = () => {
  let [student, setStudent] = useState([]);

  let getApi = async () => {
    let { data } = await axios.get('http://localhost:5000/student');
    setStudent(data);
  };

  console.log(student);

  useEffect(() => {
    try {
      getApi();
    } catch (e) {
      console.log(e);
    }
  }, []);

  let deleteStudent = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/student/${id}`);
    window.location.assign('/ViewAll');
  };

  return (
    <>
      <NavBar />
      <h1 className='viewHeading'>All students information</h1>
      <table className='tableContainer'>
        <thead>
          <tr>
            <th>SI NO</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th colSpan={3}>OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {student.map((x) => {
            return (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.stuname}</td>
                <td>{x.stuemail}</td>
                <td>
                  <NavLink to={`/edit/${x.id}`}>
                    <button className='btnupdate'>UPDATE</button>
                  </NavLink>
                </td>
                <td>
                  <button className='btndelete' onClick={() => deleteStudent(x.id)}>
                    DELETE
                  </button>
                </td>
                <td>
                  <NavLink to={`/singlestu/${x.id}`}>
                    <button className='btnview'>VIEW-MORE</button>
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ViewAll;
