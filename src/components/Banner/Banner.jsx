import React, { useEffect, useState } from 'react'
import {API_key,imageUrl} from '../../constants/Constants'
import axios from "../../axios"
import "./Banner.css"
const Banner = () => {
    const [movie,setMovie]= useState()
    useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        setMovie(response.data.results[9])
        setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })
    },[])
    return (

        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path  :  ""})`}}
        className='banner'>
            <div className='content'>
                <h1 className='title'> {movie ? movie.title : ""}</h1>
                <div className='banner_button'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='descryption'>{movie ? movie.overview : ""}</h1>
            </div>
<div className="fade"></div>
        </div>
    )
}

export default Banner
