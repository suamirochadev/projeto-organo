import './style.css'

function ListaSuspensa(props) {

    return(
        <div className='lista-suspensa'>
            <label>
                {props.titulo}
            </label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                value={props.valor}
            >
                <option value="">Selecione...</option>
                {props.itens.map(item =>{
                    return <option 
                        key={item}>
                                {item}
                            </option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa