import { useState } from 'react'
import Banner from "./components/Banner"
import Form from "./components/Form"
import Time from './components/Time'
import { v4 as uuidv4 } from 'uuid';
import Rodape from './components/Rodape';

function App() {

  const [times, setTimes] = useState([
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Programação',
    cor: 'var(--green-400)',
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Front End',
    cor: 'var(--blue-400)',
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Data Science',
    cor: 'var(--green-400)',
  },
  {
    id: uuidv4(),
    favorito: false,
    nome:'Devops',
    cor: 'var(--pink-400)',
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'UX e Design',
    cor: 'var(--purple-400)',
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Mobile',
    cor: 'var(--yellow-400)',
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Inovação e Gestão',
    cor: 'var(--orange-400)',
  }
])

const inicial = [
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: 'https://images.unsplash.com/photo-1667329001918-9acbae14dedc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[1].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[3].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[4].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Alessandra',
    cargo: 'Desenvolvedora',
    imagem: '',
    time: times[4].nome
  },
]


   const [colaboradores, setColaboradores] = useState(inicial)

   function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
   }

   function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
   }

   function cadastrarTime(novoTime) {
    setTimes([ ...times, {...novoTime, id: uuidv4()}])
   }

   function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))

   }

  return (
    <div 
      className="App"
    >
      <div>
        <Banner/>
        <Form
          cadastrarTime={cadastrarTime}
          times={times.map(time => time.nome)}
          aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
        />
        <section 
          className='times'>
          <h1>
            Minha Organização
          </h1>
          {times.map((time, indice) => 
        <Time
        aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          key={indice} 
          time={time}
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
