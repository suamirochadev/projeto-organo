import './style.css'
import IconTwitter from '/twitter.svg'
import IconFacebook from '/facebook.svg'
import IconInstagram from '/instagram.svg'
import Logo from '/Logo.svg'

function Rodape() {
    return(
        <div className='rodape'>
            <div>
                <img src={IconFacebook} alt="Facebook icone" />
                <img src={IconTwitter} alt="Twitter icone" />
                <img src={IconInstagram} alt="Instagram icone" />
            </div>
            <img src={Logo} alt="Logo Organo" />
            <h6>Desenvolvido por <a href='https://github.com/suamirocha'>Suami Rocha</a> 🤍</h6>
        </div>
    )
}

export default Rodape