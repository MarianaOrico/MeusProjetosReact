import { useState, useEffect } from 'react'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import image from '../../assets/portfolio.svg'
import { BsArrowReturnRight } from 'react-icons/bs'
import FlatList from 'flatlist-react'
import axios from 'axios'
import './portfolio.css'

const list = [
    {
        id: 1,
        nome: 'M de Maravilhosa',
        descricao: 'Uma landing page sobre a história da Nise de Olveira.',
        conteudo: 'Feito com html, css e js.',
        imagem: 'https://media.giphy.com/media/sjkKz3yKlsu76Ufpku/giphy.gif',
        link: 'https://m-de-maravilhosa-mariana-orico.netlify.app/'
    },
    {
        id: 2,
        nome: 'TO DO list',
        descricao: 'Uma aplicação em JavaScript para fazer um To Do list.',
        conteudo: 'Utilização de eventos do JavaScript.',
        imagem: 'https://media.giphy.com/media/ilFXbGqVoCa3oorTCN/giphy.gif',
        link: 'https://projeto-list-to-do.netlify.app/'
    },
    {
        id: 3,
        nome: 'Studio Ghibli',
        descricao: 'Uma requisição de API dos filmes do Studio Ghibli.',
        conteudo: 'Requisição de API em prática.',
        imagem: 'https://media.giphy.com/media/IS9ka3BAzMXBX82i0d/giphy.gif',
        link: 'https://studioghiblifilmes.netlify.app/'
    },
    {
        id: 4,
        nome: 'TV Shows',
        descricao: 'Um site em JS para demonstrar uso de DOM e JSON.',
        conteudo: 'Javacript e DOM',
        imagem: 'https://media.giphy.com/media/FJ9J8CbAuOUU26ZdEo/giphy.gif',
        link: 'https://tvseriesjs.netlify.app/'
    }
]

function Portfolio() {
    const [repos, setRepos] = useState([])
    const baseURL = 'https://api.github.com/users/MarianaOrico/repos'

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => setRepos(response.data))
    }, [])

    return (
        <>
            <Header
                image={image}
                description="ilustracao mulher com site"
            >
                Meus Projetos
            </Header>

            <div className="cartao-container">
                {
                    list.map(projeto => {
                        return (
                            <div className="cartao" key={projeto.id}>
                                <h1>{projeto.nome}</h1>
                                <img src={projeto.imagem} alt={"imagem do projeto " + projeto.nome} />
                                <p>{projeto.descricao}</p>
                                <a href={projeto.link} className="enter-repo" target="_blank">
                                    <BsArrowReturnRight siz={16} color="#111" />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <h2 className="titulo">Outros Projetos</h2>

            <div className="repo-container">
                <ul>
                    <FlatList
                        list={repos}
                        renderItem={(repo) =>
                            <div className="repo" key={repo.id}>
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>
                                <a href={repo.html_url} className="enter-repo" target="_blank">
                                    <BsArrowReturnRight siz={16} color="#fff" />
                                </a>
                            </div>
                        }
                        displayGrid
                    />
                </ul>

            </div>

            <Footer />
        </>

    )
}

export default Portfolio