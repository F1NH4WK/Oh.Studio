import { useState } from "react";

interface ImagesProps {
    random: number;
}


export default function Images({ random }: ImagesProps){

    const [name, setName] = useState('Loading...')

    const request = `https://picsum.photos/id/${random}/info`

    // GETTING THE AUTHOR OF IMAGE
    fetch(request).then(
        (response) =>  response.json().then(
            json => setName(json.author)
        )
    )

    // AXIOS WAS A POSSIBLE SOLUTION, BUT MY PROBLEM WAS A SIMPLE THING, SO FETCH'D BE EASIER.

    return(
        <figure className=" group h-96 rounded-3xl w-full overflow-hidden mb-3 cursor-pointer">
            <figcaption
            className="absolute z-10 m-5 group-hover:animate-imageCaption opacity-0 text-xl tracking-tighter drop-shadow-xl">
                {name}    
            </figcaption>

            <img 
            alt="Image"
            src = {`https://picsum.photos/1000/500?random=${random}`}
            className = 'object-cover w-full h-full hover:blur-sm transition-all duration-500'>
            </img>
            
        </figure>
    )
}