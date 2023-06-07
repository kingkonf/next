import React from 'react'
import styles from '@/styles/common.module.css'
import MovieCard from '../blogpost/moviecars';

export const getStaticProps = async()=>{
  
  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'afdb00fb2dmshbd83b0f603b77bep1d3718jsn20ab746e9503',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
    const res = await fetch(url, options)
    const data= await res.json(res);
    const main_data = data.titles;
    console.log(main_data);
    return {
     props: {
      main_data: main_data,
     },
    };
}
const Movie = ({main_data}) => {


  return (
    <>
    <section className={styles.movieSection}>
    <div  className={styles.container}>
    <h1>SERIES AND MOVIES</h1>
    <div className={styles.card_section}>
    {
      main_data.map((element)=>{
        return (
          // <MovieCard key={element.id} {...element}/>
          <MovieCard key={element.id} {...element}/>
        )
      })}
      </div>
    </div>
    
    </section>
    
    </>
  )
}

export default Movie