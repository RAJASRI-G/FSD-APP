import React from 'react'
import './Loginfirst.css'



import { useForm } from "react-hook-form";

const Loginfrist = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data)

  return (
	<div className='rbody'>
	<center>
    <div className="App__form">
      <h1 className="fa"><center>LOGIN </center></h1><br></br><br></br>
	  <form onSubmit={handleSubmit(onSubmit)}>
	  <center>
	  <div className='container-rlog'>
	  <a href="./loginadmin" class="btnsr">
	 
		<p className='u'>ADMIN</p>
	</a>
	</div>
	</center>
	<center>
	  <div className='container-rlog'>
	  <a href="./loginleader" class="btnsr">
	  
	 
		<p className='u'>Leader</p>
	</a>
	</div>
	</center>
	<center>
	  <div className='container-rlog'>
	  <a href="./loginmember" class="btnsr">
	  
	 
		<p className='u'>MEMBERS</p>
	</a>
	</div>
	</center>
      </form>
	  </div>
	  </center>
	  </div>
  )
}


export default Loginfrist