import {FaStar} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import './styles.css'
 
export default function StarRating({stars = 5}){

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const starsArray = [...Array(stars)]

    const handleClick = function(index){
        setRating(index)
    }

    const handleHover = function(index){
        setHover(index)
    }

    const handleLeave = function(){
        setRating(0)
        setHover(0)
    }

    return <div onMouseLeave={handleLeave}>{
        starsArray.map((_ , index) =>{
            index += 1
            return <FaStar
            className = {(index <= (rating || hover) ? 'active' : 'no-active')}
            key = {index}
            onClick = {() => handleClick(index)}
            onMouseMove = {() => handleHover(index)}
            />
        })
    }</div>
}