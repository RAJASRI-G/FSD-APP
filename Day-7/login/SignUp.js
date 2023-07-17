import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
const StudentLogin = ()=>{
    const navigate = useNavigate()
    const navigateTo = ()=>{
        navigate('/admin')
    }
    return (
        <div className='loginBg'>
           <div className="formCenter">
            <div className='loginHead'>
                <button className='glow-on-hover' >SignUp</button>
                <button className='glow-on-hover'
                onClick={()=>{navigateTo()}}
                style={{color:'white'}}>SignIn</button>
            </div>
            <div class="ab">
            <div class="main-block">
            <h1>SignUp</h1>
            <form action="/" className="fm">
              <div class="account-type">
                <input type="radio" value="none" id="radioOne" name="account" checked/>
                <label for="radioOne" class="radio">User</label>
                <input type="radio" value="none" id="radioTwo" name="account" />
                <label for="radioTwo" class="radio">Manager</label>
              </div>
              <hr></hr>
              <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
              <input type="text" name="name" id="name" placeholder="Email" required/>
              <label id="icon" for="name"><i class="fas fa-user"></i></label>
              <input type="text" name="name" id="name" placeholder="Name" required/>
              <label id="icon" for="name"><i class="fa fa-lock"></i></label>
              <input type="text" name="name" id="name" placeholder="Password" required/>
              <hr></hr>
              <div class="gender">
                <input type="radio" value="none" id="male" name="gender" checked/>
                <label for="male" class="radio">Male</label>
                <input type="radio" value="none" id="female" name="gender" />
                <label for="female" class="radio">Female</label>
              </div>
              <hr></hr>
              <div class="btn-block">
                <p>By clicking Register, you agree on our <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for W3Docs</a>.</p>
                <br></br>
             <button className="bt"
              
              onClick={()=>[
                navigate('/admin')
              ]}
              >SignUp</button>{" "}
               
              </div>
            </form>
          </div>
          </div>
            </div>
            </div>
            )
          }
          export default StudentLogin
          // <form onSubmit={(e)=>handleSubmit(e)} className="formFields">
          //   <div className="formField">
          //     <label className="formFieldLabel" htmlFor="name">
          //       Full Name
          //     </label>
          //     <input
          //       type="text"
          //       id="name"
          //       className="formFieldInput"
          //       placeholder="Enter your full name"
          //       name="name"
          //       value={name}
          //       onChange={(e)=>setName(e.target.value)}
          //     />
          //   </div>
  
          //   <div className="formField">
          //     <label className="formFieldLabel" htmlFor="email">
          //       E-Mail Address
          //     </label>
          //     <input
          //       type="email"
          //       id="email"
          //       className="formFieldInput"
          //       placeholder="Enter your email"
          //       name="email"
          //       value={email}
          //       onChange={(e)=>setEmail(e.target.value)}
          //     />
          //   </div>
  
          //   <div className="formField">
          //     <label className="formFieldLabel" htmlFor="password">
          //       Password
          //     </label>
          //     <input
          //       type="password"
          //       id="password"
          //       className="formFieldInput"
          //       placeholder="Enter your password"
          //       name="password"
          //       value={password}
          //       onChange={(e)=>setPassword(e.target.value)}
          //     />
          //   </div>
          
          //   <div className="formField">
          //     <label className="formFieldCheckboxLabel">
          //       <input
          //         className="formFieldCheckbox"
          //         type="checkbox"
          //         name="hasAgreed"
          //         value={hasAgreed}
          //         onChange={()=>{setHasAggreed(!hasAgreed)}}
          //       />{" "}
          //       I agree all statements in{" "}
          //       <a href="null" className="formFieldTermsLink">
          //         terms of service
          //       </a>
          //     </label>
          //   </div>
  
          //   <div className="formField">
          //     <button className="formFieldButton"
              
          //     onClick={()=>[
          //       navigate('/profile')
          //     ]}
          //     >SUBMIT</button>{" "}
          //   </div>
          // </form>