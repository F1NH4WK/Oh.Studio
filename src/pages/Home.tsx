import Images from "../components/Images"

export default function Home(){

    return(
        <div className = 'flex justify-center flex-col items-center text-white pt-40 scroll-smooth animate-load'>
            
            <div className = 'w-[60%] min-w-[60%] h-64 flex items-center justify-center'>
                <h1 className = 'text-7xl text-center leading-tight font-semibold'>
                    A brand and product designer working with clients globally    
                </h1> 
            </div>   

            <div className = 'flex flex-row w-96 h-10 items-center justify-between px-1 rounded-full mt-10 mb-28 text-sm min-w-fit min-h-fit'>
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

                <div className = 'grid grid-rows-4 grid-flow-row grid-cols-2 gap-8 w-full px-14 mb-28 flex-shrink'>
                    { Array.from({length: 12}).map((_, index) => {
                        return(
                         <Images key={index} random = {Math.random()*50} />
                        )
                    })}                    
                </div>

                <div className = "flex w-full h-64 gap-4 flex-col items-center text-5xl font-medium">
                    <p>Let's work together.</p>
                    <a href = 'mailto:oli@oh.studio'>
                        <p className = 'text-zinc-400 hover:text-zinc-600 cursor-pointer'>Get in touch.</p>
                    </a>
                </div>
        </div>
    )
}