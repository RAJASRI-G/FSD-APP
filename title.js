import React, { Component } from 'react'
import './title.css'
import { logout, selectUser } from './userSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Welcome() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
    return (
        <div className="bg">
        <div className="t">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>welcome {user.name}</h1>
        <br></br>
        <br></br>
        <br></br>
        <h1>
        Discipline of creating, documenting,<br></br><br></br>
         monitoring and 
        improving upon the series of <br></br><br></br>steps,
        or workflow, that is required to complete <br></br><br></br> a specific task
        </h1>
        </div>
        </div>
    )
  }

