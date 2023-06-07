import React from 'react'
import { useRef } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const signup = (e)=>{
        e.preventDefault();
       const  email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("succesful signup");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error");
    // ..
  });

    }
    

return (
    <>
    <div>
        <center>
            <h1>signup</h1><br/>
            <form onSubmit={signup}>
            <input type="email" placeholder="enter your email id" ref={emailRef}/><br/>
            <br/><br/>
            <input type="password" placeholder='enter your password' ref={passwordRef}/>
            <br/>
            <br/>
            <br/>
      <button type='submit'>signup</button>
       </form>
        </center>
    </div>
    </>
  )
}

export default SignUp