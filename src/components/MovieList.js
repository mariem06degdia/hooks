import React from 'react'
import MovieCard from './MovieCard'

function MovieList({simpson,setSimpson ,search, rate}) {
  return (
    <div className='movieList'>
  {
    simpson.filter((s)=>console.log("test",s)) 
    .map((s)=> <MovieCard simpson={s} key={s.id} />)
  }
    </div>
  )
}

export default MovieList