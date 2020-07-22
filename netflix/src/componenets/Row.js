import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] =useState("");
  useEffect(() => {
    //async
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts ={
    height :"800",
    width: '100%',
    playerVars:{
      autoplay:1,
    }
  }
  // console.table(movies);

  const handleClick = ( movie) =>{
    if(trailerUrl){
      setTrailerUrl('');

    }else{
      movieTrailer(movie?.name ||"")
      .then(url=>{
        const urlParams =new URLSearchParams( new URL(url).search)
        setTrailerUrl(urlParams.get('v')) ;
        console.log(trailerUrl)
      }).catch(err=> console.log(err))
    }
  }
  return (
    <div className='row'> 
      {/* Title */}
      <h2>{title}</h2>

      {/* Container  */}
      <div className="row__posters">
        {/* Elements */}
        {movies.map((movie) => (
          <img
            onClick ={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterlarge"}`}
            src={`${baseurl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
        {
          trailerUrl &&   <Youtube videoId={trailerUrl} opts={opts} />
          
        }
      </div>
    </div>
  );
}

export default Row;
