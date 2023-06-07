import React from 'react'
import { useRef } from 'react'
import { auth } from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const lemailRef = useRef()
    const lpasswordRef = useRef()

   const email = lemailRef.current.value;
   const password = lpasswordRef.current.value;
   
    const login = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("login succesful");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error");
  });
    }
  return (
   <>
    <div>
        <center>
            <h1>signup</h1><br/>
            <form onSubmit={login}>
            <input type="email" placeholder="enter your email id" ref={lemailRef}/><br/>
            <br/><br/>
            <input type="password" placeholder='enter your password' ref={lpasswordRef}/>
            <br/>
            <br/>
            <br/>
      <button type='submit'>login</button>
       </form>
        </center>
    </div>
   </>
  )
}

export default Login