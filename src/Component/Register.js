import React from 'react'
import './reg.css'
import { Form } from 'react-router-dom';

function Swiggy() {
  const handleshowalert = () => {
    window.confirm("conform your detiles or not?");
    alert("You have successfully Register👍");
  }
  return (
    <div className='bg1'>
       <form className='register-form'>
<h1 className='s'><center>Register form</center><br/></h1>
<div>
{/* <Form action='/addUser' method='post' modelAttribute="user"/> <br /> */}
<p className='s'><center>Enter the name<input type="text"placeholder="Enter your name"/></center></p><br/>
<p className='s'><center>Enter the id<input type="number"placeholder="Enter your id"/></center></p><br/>
<p className='s'><center>Enter the fist name<input type="text"placeholder="Enter your fist name" /></center></p><br/>
<p className='s'><center>Enter the last name<input type="text"placeholder="Enter your last name"/></center></p><br/>
<p className='s'><center>Enter the mobile no<input type="number"placeholder="Enter your mobile no" /></center></p><br/>
<p className='s'><center>Enter the DOB<input type="date"placeholder="Enter your DOB"/></center></p><br/>
<p className='s'><center>Enter the E-mail id<input type="email"placeholder="Enter your fist name"/></center></p><br/>
<p className='s'><center>Enter the address<textarea></textarea></center></p><br/>
<p className='s'><center>Genter<input type="radio"name="gender"/>male <input type="radio"/>female</center></p>


{/* <div style="text-align: center;">
 <select style="margin: 0 auto; display: block;"></select> */}


<p><center>State</center></p>
<div><center><select>
      <option>select your state</option>
      <option>Tamilnadu</option>
      <option>Karala</option>
      <option>delhi</option>
      <option>maharastra</option>
    </select>
    </center>
    </div> 
<div ><br/><center><button  onClick={handleshowalert} ><a href="http://localhost:1121/login">confirm</a></button></center></div>
</div>
</form>
  </div>
  )
}

export default Swiggy
