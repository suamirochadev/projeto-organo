import Colaborador from '../Colaborador'
import './style.css'

function Time(props) {

    const css = { backgroundColor: props.corPrimaria }
    const border = { borderColor: props.corSecundaria }

    return(
        (props.colaboradores.length > 0) ? 
        <section 
            className='time' 
            style={css}>
            <h3 
                style={border}>
                    {props.nome}
            </h3>
            <div>
                {props.colaboradores.map(colaborador => <Colaborador
                corDeFundo={props.corSecundaria}
                key={colaborador.nome}
                nome={colaborador.nome} 
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time