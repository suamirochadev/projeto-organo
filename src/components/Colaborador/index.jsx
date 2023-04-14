import {AiFillCloseCircle} from 'react-icons/ai'
import './style.css'

function Colaborador({colaborador, corDeFundo, aoDeletar}) {
    return(
        <div 
            className='colaborador'>
            <AiFillCloseCircle
                size={25}
                onClick={aoDeletar}
                className="deletar"
            />
            <div 
                className='cabecalho' 
                style={{ backgroundColor: corDeFundo }}
            >
                <img 
                    src={colaborador.imagem} 
                />
            </div>
            <div 
                className='rodape'
            >
                <h4>
                    {colaborador.nome}
                </h4>
                <h5>
                    {colaborador.cargo}
                </h5>
            </div>
        </div>
    )
}

export default Colaborador