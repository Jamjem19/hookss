import React from 'react'

function AnimeCard({anime}) {
    return (
       <article className="anime-card">
       <a href={anime.url} targuet="_blank" rel="noreferrer">
           <figure>
               <img src={anime.image_url} 
               alt="Anime Image" />
           </figure>
           <h3>{ anime.title }</h3>
           <h4>{anime.rank}</h4>
       </a>


       </article>
    )
}

export default AnimeCard
