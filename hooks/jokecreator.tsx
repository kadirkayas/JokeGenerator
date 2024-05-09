import axios from "axios";
import { useEffect, useState } from "react";

async function getJoke() {
    console.log("getJoke");
    
    const joke= await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    return (joke.data.joke);   
}


export function JokeCreator() {
    const [joke,setJoke]=useState("")
    const handleClick = async () => {
        const joke=await getJoke();
        setJoke(joke)
    }
    useEffect(() => {
        handleClick();
    }, [])
    return (
        <div className="creator">
            <button onClick={handleClick} className="getJoke">Get Joke</button>
            <p className="joke">{joke}</p>
        </div>
    )
}