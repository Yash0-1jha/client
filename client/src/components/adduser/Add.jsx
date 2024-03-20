import React, { useState } from 'react'
import './add.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const Add = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: ""
  }
  const [ user, setUser ] = useState(users);

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  }
  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("https://yashcrud.vercel.app/api/create", user)
      .then((response)=>{
        console.log(response);
      }).catch(error => console.log(error));
  }

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor='fname'>First Name</label>
          <input type='text' onChange={inputHandler}  id='fname' name='fname' autoComplete='off' placeholder='First Name' />
        </div>
        <div className="inputGroup">
          <label htmlFor='lname'>Last Name</label>
          <input type='text' onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='Last Name' />
        </div>
        <div className="inputGroup">
          <label htmlFor='email'>Email</label>
          <input type='email' onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='example@mail.com' />
        </div>
        <div className="inputGroup">
          <label htmlFor='password'>Password</label>
          <input type='text' onChange={inputHandler} id='password' name='password' autoComplete='off' placeholder='Password' />
        </div>
        <div className="inputGroup">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  )
}

export default Add