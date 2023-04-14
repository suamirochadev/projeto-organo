import BannerImg from '/organo_banner.png'
import './style.css'

function Banner() {
    return(
        <header className='banner'>
            <img 
                src={BannerImg} 
                alt="Banner do Organo."
            />
        </header>
    )
}

export default Banner