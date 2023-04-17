import { useState } from 'react'
import Botao from '../Botao'
import CampoDeTexto from '../CampoDeTexto'
import ListaSuspensa from '../ListaSuspensa'
import './style.css'

function Form({cadastrarTime, aoCadastrar, times}) {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    return(
        <section 
            className='formulario-container'
        >
                <form 
                    className='formulario'
                    onSubmit={(evento) => {
                        evento.preventDefault()
                        console.log('form enviado', nome, cargo, imagem, time)
                        aoCadastrar({
                            nome,
                            cargo,
                            imagem,
                            time
                        })}}
                >
                    <h2>
                        Preencha os dados para criar o card do colaborador.
                    </h2>
                    <CampoDeTexto 
                        obrigatorio={true}
                        label='Nome'
                        valor={nome} 
                        aoAlterado={valor => setNome(valor)} 
                        placeholder='Digite seu nome'
                    />
                    <CampoDeTexto 
                        obrigatorio={true} 
                        label='Cargo' 
                        valor={cargo} 
                        aoAlterado={valor => setCargo(valor)}
                        placeholder='Digite seu cargo aqui'
                    />
                    <CampoDeTexto
                        obrigatorio={true}
                        label='Imagem'
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                        placeholder='Digite o endereço da sua imagem aqui'
                    />
                    <ListaSuspensa 
                        obrigatorio={true}
                        label='Time'
                        valor={time}
                        itens={times}
                        aoAlterado={valor => setTime(valor)}
                    />
                    <Botao 
                        texto='Criar Card'
                    />
                </form>
                <form 
                    className='formulario'
                    onSubmit={(evento) =>{
                        evento.preventDefault()
                        cadastrarTime({nome: nomeTime, cor: corTime})
                    } }
                >
                    <h2>
                        Preencha os dados para criar um novo time.
                    </h2>
                    <CampoDeTexto 
                        obrigatorio
                        label='Nome'
                        valor={nomeTime} 
                        aoAlterado={valor => setNomeTime(valor)} 
                        placeholder='Digite o nome do time'
                    />
                    <CampoDeTexto 
                        valor={corTime} 
                        aoAlterado={valor => setCorTime(valor)}
                        obrigatorio={true} 
                        type='color'
                        label='Cor' 
                        placeholder='Digite a cor do time'
                    />
                    <Botao texto='Criar um novo time' />
                </form>
        </section>
    )
}

export default Form