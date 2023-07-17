import React from "react";
import { useNavigate} from "react-router-dom";
const AdminLogin = ()=>{
    const navigate = useNavigate()
    const navigateTo = ()=>{
        navigate('/')
    }
    return (
        <div className='loginBg'>
           <div className="formCenter">
            <div className='loginHead'>
                <button className='glow-on-hover' 
                onClick={navigateTo}
                style={{color:'white'}}>SignIn</button>
            </div>
            <div class="ab">
            <div class="main-block">
            <h1>SignIn</h1>
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
              <label id="icon" for="name"><i class="fa fa-lock"></i></label>
              <input type="text" name="name" id="name" placeholder="Password" required/>
              <br></br>
              <br></br><br></br>
              <br></br>
              <hr></hr>
              <div class="btn-block">
                <br></br>
             <button className="bt"
              
              onClick={()=>[
                navigate('/nav')
              ]}
              >SignIn</button>{" "}
               
              </div>
            </form>
          </div>
          </div>
      </div>
        </div>
    )
}
export default AdminLogin