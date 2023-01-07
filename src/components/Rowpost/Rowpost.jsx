
import React, { useEffect, useState } from 'react'
import "./Rowpost.css"
import axios from '../../axios'
import {imageUrl,API_key} from '../../constants/Constants'
import YouTube from 'react-youtube'

const Rowpost = (props) => {
  const [movies,setMovies] = useState([])
  const [urlId,setUid] =   useState('')
  useEffect(()=> {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  },[])
  const opts = {
    height: '100%',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_key}&language=en-US`).then(response=>{
  if(response.data.results.length!==0){
    setUid(response.data.results[0])
  }else{
    console.log('not available')
  }
})
  }
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        
        <div className='post'>
        {movies.map((obj)=>
          
        
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} />
          ) }

        </div>
      { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Rowpost
