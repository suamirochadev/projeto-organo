import { useState } from 'react'
import Botao from '../Botao'
import CampoDeTexto from '../CampoDeTexto'
import ListaSuspensa from '../ListaSuspensa'
import './style.css'

function Form(props) {

    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setImagem('')
        setCargo('')
        setTime('')
    }

    return(
        <section 
            className='formulario'
        >
                <form 
                    onSubmit={aoSalvar}
                >
                    <h2>
                        Preencha os dados para criar o card do colaborador.
                    </h2>
                    <CampoDeTexto 
                        valor={nome} 
                        aoAlterado={valor => setNome(valor)} 
                        obrigatorio={true} 
                        titulo='Nome' 
                        placeholder='Digite seu nome aqui'
                    />
                    <CampoDeTexto 
                        valor={cargo} 
                        aoAlterado={valor => setCargo(valor)}
                        obrigatorio={true} 
                        titulo='Cargo' 
                        placeholder='Digite seu cargo aqui'
                    />
                    <CampoDeTexto
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                        obrigatorio={true}
                        titulo='Imagem'
                        placeholder='Digite o endereço da sua imagem aqui'
                    />
                    <ListaSuspensa 
                        obrigatorio={true}
                        titulo='Time'
                        itens={props.times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
        </section>
    )
}

export default Form