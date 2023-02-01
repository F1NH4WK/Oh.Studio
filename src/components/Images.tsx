interface ImagesProps {
    name?: string;
    random: number;
}

export default function Images({ name = '', random }: ImagesProps){
    return(
        <div className="h-96 rounded-3xl w-full overflow-hidden mb-3  cursor-pointer">
            <img src = {`https://picsum.photos/1000/500?random=${random}`} className = 'object-cover w-full h-full hover:blur-sm transition-all duration-500'/>
        </div>
    )
}