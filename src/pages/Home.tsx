import Images from "../components/Images"

export default function Home(){

    return(
        <div className = 'flex justify-center flex-col items-center text-white pt-40 scroll-smooth animate-load'>
            
            <div className = 'sm:w-[60%] h-64 flex items-center justify-center text-4xl sm:text-7xl'>
                <h1 className = 'text-center leading-tight font-semibold tracking-tighter'>
                    A brand and product designer working with clients globally    
                </h1> 
            </div>   

            <div className = 'flex flex-row sm:w-96 sm:h-10 w-5/6 items-center justify-center sm:justify-between gap-3 sm:gap-0 px-1 sm:mt-10 mb-28 text-sm animate-load flex-wrap'>
                <div className = ' flex p-[0.25rem] rounded-full px-3'>
                    <p>Expertise</p>
                </div>

                <div className = 'bg-teste flex p-[0.25rem] rounded-full px-3'>
                    <p>Branding</p>
                </div>

                <div className = 'bg-teste flex p-[0.25rem] rounded-full px-3'>
                    <p>Product</p>
                </div>

                <div className = 'bg-teste flex p-[0.25rem] rounded-full px-3'>
                    <p>Design Systems</p>
                </div>
            </div>

                <div className = 'grid grid-rows-4 grid-flow-row grid-cols-2 gap-8 w-full sm:px-14  sm:mb-28 mb-2 px-5'>
                    { Array.from({length: 12}).map((_, index) => {
                        return(
                         <Images key={index} random = {Math.round(Math.random()*50)} />
                        )
                    })}                    
                </div>

                <div className = 'flex items-center text-4xl sm:text-4xl justify-center h-[65vh] sm:h-60 sm:mb-20 flex-col'>
                <h1 className = 'text-center leading-tight font-semibold tracking-tighter'>
                    Let's work together.
                </h1> 
                 <a href = 'mailto:oli@oh.studio'>
                    <p className = 'text-zinc-400 hover:text-zinc-600 text-center tracking-tighter font-semibold cursor-pointer'>Get in touch.</p>
                </a>
            </div>  
        </div>
    )
}