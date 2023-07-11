import React, { Component}from 'react'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div class="ab">
      <div class="main-block">
      <h1>SignUp</h1>
      <form action="/">
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
          <button type="submit" href="/">SignUp</button>
        </div>
      </form>
    </div>
    </div>
    )
  }
}

