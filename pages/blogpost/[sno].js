import React from 'react'
export const getStaticPaths = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();

    const paths = data.map((element)=>{
        return{
        params: {
            sno: element.id.toString(),
        }
    };
    })
    return{
        paths,
        fallback: false,
    };
};

export const getStaticProps = async(context)=>{
    const id = context.params.sno;
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return {
        props:{
           data:  data,
        },
    };
}
import { useRouter } from 'next/router'

const post = ({data}) => {
    const{id, title, body} = data;
    const router = useRouter()
    const {sno} = router.query
    
    return(
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
                justify-content: center;
                background-color: #333;
                padding: 20px;
                color: #fff;
                transition: background-color 0.3s ease;
                cursor: pointer;
              }
              
              .box:hover {
                background-color: #555;
              }
              
              .content {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
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
                margin-bottom: 10px;
                transition: transform 0.3s ease;
              }
              
              .box:hover .number {
                transform: scale(1.1);
              }
              
              .title {
                font-size: 24px;
                margin-bottom: 5px;
              }
              
              .description {
                font-size: 16px;
                margin-bottom: 10px;
              }
              
            `}
        </style>

        <h1>the page no is {sno}</h1>
    <div key={data.id}>
     <div className="container">
    <div className="box">
      <div className="content">
        {/* <div className={"number"}>{data.id}</div>
        <div className="title">{data.title}</div>
        <div className="description">{data.body}</div> */}
         <div className={"number"}>{id}</div>
        <div className="title">{title}</div>
        <div className="description">{body}</div>
      </div>
    </div>
  </div>
</div>
</>
    )
   
};

export default post