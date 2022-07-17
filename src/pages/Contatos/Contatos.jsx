import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import image from '../../assets/online-msg.svg'
import Cards from '../../componentes/Cards/Cards'
import Github from '../../images/github (1).png'
import LinkedIn from '../../images/linkedin.png'
import Gmail from '../../images/enviar.png'
import './contatos.css'

function Contatos() {
    return(
        <>
        <Header image={image}
        description="Ilustração de uma mulher">Meus Contatos</Header>
        <div className='container-cards'>
        <Cards image={Github} title="Github" link='https://github.com/MarianaOrico'/>
        <Cards image={LinkedIn} title="LinkedIn" link="https://www.linkedin.com/in/marianaorico/"/>
        <Cards image={Gmail} text="marianaorico@gmail.com" />
        </div>

        <Footer />
        </>
    )
}

export default Contatos