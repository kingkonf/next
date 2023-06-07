import React from 'react'
import Link from 'next/link';
export const getStaticProps = async()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return {
        props:{
           data:  data,
        },
    };
}

const contact = ({data}) => {
  return (
    <>  
    
     <style jsx>
        {`
        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          
          .box {
            display: flex;
            align-items: center;
            background-color: #333;
            padding: 20px;
            color: #fff;
            transition: background-color 0.3s ease;
            cursor: pointer;
          }
          
          .box:hover {
            background-color: #555;
          }
          
          .number {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #fff;
            color: #333;
            font-size: 24px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            order: 1; /* Updated order */
            transition: transform 0.3s ease;
          }
          
          .title {
            font-size: 24px;
            order: 2; /* Updated order */
          }
          
          
        `}
    </style> 

     {
        data.slice(0,5).map((element)=>{
            return (
                <>
              <div key={element.id}>
              <div className="center-container">
    <div className="box">
     <Link href={`/blogpost/${element.id}`}> <h2 className="title">{element.title}</h2></Link>
      <h1 className="number">{element.id}</h1>
    </div>
  </div>
               </div>
                </>
            )
        })}
    </>
  )
}

export default contact