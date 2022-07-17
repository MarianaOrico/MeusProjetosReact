import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import image from '../../assets/about_me.svg'
import Imagem from '../../images/Imagem.jpeg'
import './sobre.css'

function Sobre() {
    return (
        <>
            <Header
                image={image}
                descrption="Ilustração de uma mulher"
            >
                Sobre mim
            </Header>
            <hr></hr>
            <div className="apresentacao">
            <img className='fotoPerfil' src={Imagem} />
            <div className="textos">
                <h2 className='present-title'>Olá, eu sou Mariana Orico!</h2>
                <p className='present-text'>Desenvolvedora Front-End Júnior.</p>
                <p className='present-text'>Possuo habilidades em HTML, CSS, JavaScript, Git, Github e React.</p>
                <p className='present-text'>Aluna da turma Front-End Todas Em Tech da Reprograma</p>
                <p className='present-text'>Aluna do Programa Descodificadas - Desenvolvimento Web Full Stack</p>
                <p className='present-text'>Graduanda em Psicologia pela Universidade Federal de Sergipe</p>
            </div>
        </div>
            <Footer />
        </>
    )
}

export default Sobre