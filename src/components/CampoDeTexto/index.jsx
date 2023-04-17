import './style.css'

function CampoDeTexto({type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) {
    
    // const aoDigitado = (evento) => {
    //     props.aoAlterado(evento.target.value)
    // }

    return (
        <div 
            className={`campo campo-${type}`}
        >
            <label>
                    {label}
            </label>
            <input 
                type={type}
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default CampoDeTexto