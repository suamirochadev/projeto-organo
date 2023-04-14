import { useState } from 'react'
import Banner from "./components/Banner"
import Form from "./components/Form"
import Rodape from './components/Rodape'
import Time from './components/Time'

function App() {

  const times = [{
    nome: 'Programação',
    corPrimaria: 'var(--blue-200)',
    corSecundaria: 'var(--green-400)',
  },
  {
    nome: 'Front End',
    corPrimaria: 'var(--blue-100)',
    corSecundaria: 'var(--blue-400)',
  },
  {
    nome: 'Data Science',
    corPrimaria: 'var(--green-100)',
    corSecundaria: 'var(--green-400)',
  },
  {
    nome:'Devops',
    corPrimaria: 'var(--pink-100)',
    corSecundaria: 'var(--pink-400)',
  },
  {
    nome: 'UX e Design',
    corPrimaria: 'var(--purple-100)',
    corSecundaria: 'var(--purple-400)',
  },
  {
    nome: 'Mobile',
    corPrimaria: 'var(--orange-200)',
    corSecundaria: 'var(--yellow-400)',
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: 'var(--orange-100)',
    corSecundaria: 'var(--orange-400)',
  }
]

   const [colaboradores, setColaboradores] = useState([])

   function deletarColaborador() {
    console.log('deletando colaborador')
   }

   const aoCadastrar = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
   }

  return (
    <div className="App">
      <div>
        <Banner/>
        <Form
          times={times.map(time => time.nome)}
          aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
        />
        <section className='times'>
          <h1>
            Minha Organização
          </h1>
          {times.map((time, indice) => 
        <Time 
          key={indice} 
          time={time} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter
            (colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
          )}
        </section>
        <Rodape />
      </div>
    </div>
  )
}

export default App
