import React, { useEffect } from 'react'
// import Link from 'next/link'
// import styles from 'next/styles'
import {useRouter} from 'next/router'


const Error = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
        router.push("/")
            
        }, 3000);
    },[])
  return (
    <>
    <style jsx>
        {`
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f8f8;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .container {
            text-align: center;
            background-color: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          h1 {
            font-size: 80px;
            margin: 0;
            color: #e74c3c;
          }
          
          h2 {
            font-size: 32px;
            margin: 20px 0;
            color: #333;
          }
          
          p {
            font-size: 18px;
            margin-bottom: 20px;
            color: #666;
          }
          a {
            display: inline-block;
            background-color: #e74c3c;
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 4px;
            transition: background-color 0.3s;
          }
          
          a:hover {
            background-color: #c0392b;
            cursor: pointer;
          }
          
        `}
    </style>

     <div className="container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Oops! The page you are looking for does not exist.</p>
    {/* <Link href="/blogpost/home" >Go back to Home</Link> */}
    <a onClick={()=> router.push("/")} >Back to home</a>
  </div>

    </>
  )
}

export default Error