import { useState } from 'react'
import Banner from "./components/Banner"
import Form from "./components/Form"
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

   const novoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
   }

  return (
    <div className="App">
      <div>
        <Banner/>
        <Form
          times={times.map(time => time.nome)}
          aoColaboradorCadastrado={colaborador => novoColaborador(colaborador)} 
        />

        {times.map(time => 
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
      </div>
    </div>
  )
}

export default App
