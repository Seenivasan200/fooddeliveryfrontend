import React from 'react'
import './log.css';
const Login = () => {
    const handleshowalert = () => {
        window.confirm("conform your UserName and Password is correct not?");
        alert("Welcome to our website🙏");
    }

        return(
            <>
            <div className='bg'>
                hello
        <div className="a" >

        <form  className='login-form'>
            <h1>Login Form</h1>
            <div className="b">
                <input type="text" placeholder="Enter your name" />
            </div><br/>
            <div className="b">
                <input type="password" placeholder="Enter your password" />
            </div>
            <div className="forget"><center>
                <label><br/><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a></center>
            </div><br/><div style={{'textDecoration':'none'}}>
                <button  onClick={handleshowalert} className="c"><a href="register">Login</a></button></div>
            <div className="reg"><center>
                <br/><p>Don't have an account<a href="register">Register</a></p></center>

            </div>
        </form>
        </div>
        </div>
        </>
        )

}



export default Login