import React from 'react'
import Link from 'next/link'
import  Moviecard from "@/app/components/Moviecard"
import styles from "@/app/styles/common.module.css"
const Movie =async () => {
  const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ffe741dd13msh797fef32644dfb1p15397ejsnfcc036ec897d',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res=  await fetch(url,options)
const data = await res.json();
const main_data=data.titles;
  return (
    <div>
      <section className={styles.movieSection}>
      <div className={styles.container}>
    <h1>movies & Series page</h1>  
    <div className={styles.card_section}>
      {
        main_data.map((curElem)=>{
               return< Moviecard key={curElem.id} {...curElem}/>
        })
      }
      </div>
    </div>
    </section>
    </div>

  )
}

export default Movie
