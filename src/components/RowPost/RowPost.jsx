import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY } from '../../Constants/COnstants'
import { imageUrl } from '../../Constants/COnstants'
import YouTube from 'react-youtube'
import Footer from '../Footer/Footer'

function RowPost(props) {
  const [movie, setMovie] = useState();
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setMovie(response.data.results)
    })

  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0].key)

      setUrlId(response.data.results[0].key)

    });

  }
  return (
   <div>
      <div className='row'>
      <h1 className='title'>{props.title}</h1>
      <div className='posters'>
        {
          movie ? movie.map((obj, index) => {
            return (
              <img onClick={() => handleMovie(obj.id)} key={index} className={props.ismall ? 'smallPoster' : 'Poster'} alt="poster" src={movie ? imageUrl + obj.backdrop_path : ""} />

            )
          }) : ""
        }

      </div>

      {urlId ? <YouTube videoId={urlId} opts={opts} /> : ""}


    </div>
   
   </div>
   
  )
}

export default RowPost
