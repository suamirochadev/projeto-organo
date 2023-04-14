import Colaborador from '../Colaborador'
import './style.css'

function Time( {time, colaboradores, aoDeletar}) {

    const css = { backgroundColor: time.corPrimaria }
    const border = { borderColor: time.corSecundaria }

    return(
        colaboradores.length > 0 && 
        <section 
            className='time' 
            style={css}>
            <h3 
                style={border}>
                    {time.nome}
            </h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador, indice => {

                    return <Colaborador
                    corDeFundo={props.corSecundaria}
                    key={indice}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem} 
                    aoDeletar={aoDeletar}   
                    />
                })}
            </div>
        </section>
    )
}

export default Time