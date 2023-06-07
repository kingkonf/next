import React from 'react'

const services = () => {
  return (
   <>
   <style jsx>
    {`
mport url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,300&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    height: 100vh;
    position: relative;
    background: #111;
    color: white;
}

.container{
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.container h2{
    text-align: center;
    text-transform: uppercase;
    font-size: 35px;
    margin-bottom: 25px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.container .services{
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.container .services .card{
    width: 330px;
    text-align: center;
    background: #222;
    padding: 20px 15px;
    margin-bottom: 30px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.container .services .card:hover{
    background: chocolate;
}

.container .services .card .content{
    transition: 0.3s;
}

.container .services .card:hover .content{
    transform: scale(1.07);
}

.container .services .card .content .icon{
    padding: 5px 0;
    color: white;
}

.container .services .card .content .icon i{
    font-size: 40px;
}

.container .services .card:hover .content .title{
    color: white;
}

.container .services .card .content .title{
    padding: 5px 0;
    font-size: 24px;
    font-weight: 500;
    color: chocolate;
    transition: 0.3s;
}
    `}

   </style>
   
     <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <title>Our Services</title>
  
  <div className="container">
        <h2>Our Services</h2>
        <section className="services">
            <div className="card">
                <div className="content">
                    <div className="icon"><i class="fa fa-code"></i></div>
                    <div className="title">Web Development</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="icon"><i class="fa fa-mobile"></i></div>
                    <div className="title">App Development</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="icon"><i class="fa fa-paint-brush"></i></div>
                    <div className="title">Web Design </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="icon"><i class="fa fa-laptop"></i></div>
                    <div className="title">Responsive Design </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="icon"><i class="fa fa-line-chart"></i></div>
                    <div className="title">Advertising </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="icon"><i class="fa fa-wordpress"></i></div>
                    <div className="title">Wordpress</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                </div>
            </div>
        </section>
    </div>
      
     
   </>
  )
}

export default services