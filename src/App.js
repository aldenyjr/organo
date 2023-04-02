import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "ALDENY JÚNIOR",
      cargo: "Desenvolvedor FullStack",
      imagem:
        "https://avatars.githubusercontent.com/u/114154072?s=400&u=a7db5f411fa325d6642bc919261eb125f3114805&v=4",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "ALDENY JÚNIOR",
      cargo: "Desenvolvedor FullStack",
      imagem:
        "https://avatars.githubusercontent.com/u/114154072?s=400&u=a7db5f411fa325d6642bc919261eb125f3114805&v=4",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "ALDENY JÚNIOR",
      cargo: "Desenvolvedor FullStack",
      imagem:
        "https://avatars.githubusercontent.com/u/114154072?s=400&u=a7db5f411fa325d6642bc919261eb125f3114805&v=4",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "ALDENY JÚNIOR",
      cargo: "Desenvolvedor FullStack",
      imagem:
        "https://avatars.githubusercontent.com/u/114154072?s=400&u=a7db5f411fa325d6642bc919261eb125f3114805&v=4",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "ALDENY JÚNIOR",
      cargo: "Desenvolvedor FullStack",
      imagem:
        "https://avatars.githubusercontent.com/u/114154072?s=400&u=a7db5f411fa325d6642bc919261eb125f3114805&v=4",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "ALDENY JÚNIOR",
      cargo: "Desenvolvedor FullStack",
      imagem:
        "https://avatars.githubusercontent.com/u/114154072?s=400&u=a7db5f411fa325d6642bc919261eb125f3114805&v=4",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "ALDENY JÚNIOR",
      cargo: "Desenvolvedor FullStack",
      imagem:
        "https://avatars.githubusercontent.com/u/114154072?s=400&u=a7db5f411fa325d6642bc919261eb125f3114805&v=4",
      time: times[6].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  const deletarColaboradores = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  const resolverFavorito = (id) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  };

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => (
          <Time
            aoFavoritar={resolverFavorito}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaboradores}
            mudarCor={mudarCorDoTime}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
