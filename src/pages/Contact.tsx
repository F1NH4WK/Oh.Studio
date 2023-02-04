import Footer from "../components/Footer"


export default function Contact(){

    return(
        <div className = 'flex justify-center flex-col items-center text-white pt-40 scroll-smooth animate-load'>
            <div className = 'flex items-center text-4xl sm:text-7xl justify-center h-[65vh]  pb-24 flex-col '>
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