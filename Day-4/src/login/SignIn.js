
import React from 'react';
import "./SignIn.css";
const App = () =>
(
    <div className="signin">
    <div>
    <form class="login">
  <h2>Welcome, User!</h2>
  <p>Please log in</p>
  <input type="text" placeholder="User Name" />
  <input type="password" placeholder="Password" />
  <input type="submit" value="Log In" />
  <div class="links">
    <a href="abcd">Forgot password</a>
    <a href="abcd">Register</a>
  </div>
</form>
</div>
</div>
)
export default App;