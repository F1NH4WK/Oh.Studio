import { LinkedinLogo, TwitterLogo, PaperPlaneTilt } from 'phosphor-react'


export default function Footer(){

    return(
        <footer className = "w-full h-20 justify-between items-center flex px-10 text-white">
            <div className = 'w-2/4 h-full flex flex-row items-center justify-start'>
                <h3 className = 'font-medium text-base font-sans'>© Oli Harris 2023</h3>
            </div>

            <div className = 'w-2/4 h-full flex flex-row items-center justify-end gap-4'>
                <a href = 'https://www.linkedin.com/in/oliiharris/' >
                    <LinkedinLogo className = {'w-6 h-6 transition-all duration-200 hover:scale-110'}  alt = 'linkedin'/>
                </a>
                <a href = 'https://twitter.com/olvhrs'>
                    <TwitterLogo className = {'w-6 h-6 transition-all duration-200 hover:scale-110'} alt = 'twitter'/>
                </a>
                <a href = 'mailto:oli@oh.studio' type = 'email'>
                    <PaperPlaneTilt className = {'w-5 h-5 transition-all duration-200 hover:scale-110'} alt = 'email' />
                </a>
            </div>
        </footer>
    )
}