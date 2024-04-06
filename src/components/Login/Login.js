import React from 'react';
import './Login.css'; 


// Import this link in index.html
/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */


function Login() {
  return (
    <div className="triangle">
      <div className="log_main">
        <div className="sub_main">
          <h2 className="heading">Login</h2>
          <form>
            <div className="field-1">
              <div className="circle-1">
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <input type="text" placeholder="Enter Username" className="rect" />
            </div>
            <div className="field-2">
              <div>
                <input type="text" placeholder="Password" className="rect" />
              </div>
              <div className="circle-2">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
              </div>
            </div>
            <p className="d9i8y">Forgot Password ?</p>

            <div className="bef68">
              <button className="btn_lin">Login</button>
              <button className="btn_lin">Register</button>
            </div>
            <div className="fghjuy">
              <p>Not a member? </p>
              <a className="cat" href="/">
                <p className="swe"> Sign-Up now </p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
