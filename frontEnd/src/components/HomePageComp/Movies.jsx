import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, movie_api } from '../../handles/apiHandler';
import MovieCards from './MovieCards';
import axios from 'axios';

const Movies = () => {
    
    const data = useParams();

    //movies here
    const [movies, setMovies] = useState([]);


    useEffect(() => {

      try{
        const fetchData = async () => {
          
          if(data.key == undefined){
            data.key = 'popular';
          }
          
          if(data.key === 'popular' || data.key === 'top_rated' || data.key === 'upcoming' ){
            const type = data.key;
            const response = await  movie_api.get(`${type}?language=en-US&page=1&api_key=${apiKey}`);
            setMovies(response.data.results);
          }else{
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${data.key}`;
            const response = await axios.get(url);
            setMovies(response.data.results);
          }

        }





        fetchData();
      }catch (error)  {
        console.log(error);
      }

    }, [data]);


  
    return (
    <div className='h-auto w-full flex flex-wrap gap-12 justify-center pt-12'>

      {movies.map(movie => (
        <MovieCards key={movie.id} movie={movie} />
      ))}

    </div>
  )
}

export default Movies
