import './style.css'

function CampoDeTexto(props) {
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div 
            className='campo-texto'
        >
            <label 
                className='campo-texto label'
            >
                    {props.titulo}
            </label>
            <input 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                className='campo-texto input' 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default CampoDeTexto