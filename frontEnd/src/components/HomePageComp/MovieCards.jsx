import React from 'react'

const MovieCards = (props) => {

    const movie = props.movie;
    // const backdrop_path = props.movie.backdrop_path;



  return (
    <div className='h-[54vh] w-[20%] rounded relative px-4 py-4 flex flex-col justify-around gap-12 border border-yellow-900'>

        <div className="h-[30%] w-full relative z-[40]"></div>

        <div className='relative z-[90] text-gray-300 flex flex-col gap-4'>
            <h1 className='text-xl text-yellow-500 font-playwrite line-clamp-2'>{movie.title}</h1>
            <p className='line-clamp-4 w-[80%]'>{movie.overview ? movie.overview : "Movie Details Unavailable"}</p>
        </div>

        <div className='relative z-[90] flex justify-between w-full text-sm'>
            <button className='py-2 px-4 bg-orange-600 text-gray-800 rounded hover:px-5 active:px-4 hover:bg-orange-500 transition-hover duration-150'>Book</button>
            <button className='hover:outline hover:outline-orange-600 px-5 py-2 transition-hover duration-100 hover:text-gray-200 rounded active:outline-orange-500'>See Details</button>
        </div>


        <div className={`h-full w-full absolute top-0 left-0 rounded z-[40] opacity-80 ${movie?.backdrop_path ? 'bg-cover' : 'bg-none'}`} style={movie?.backdrop_path ? { backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` } : {}}> </div>

        <div className='h-full w-full absolute top-0 left-0 z-[50] bg-gradient-to-t from-[rgba(0,0,6,1)] via-[rgba(12,12,21,0.6)] to-[rgba(0,0,6,0.4)]from-[10%]'></div>



    
    
    </div>
  )
}

export default MovieCards
