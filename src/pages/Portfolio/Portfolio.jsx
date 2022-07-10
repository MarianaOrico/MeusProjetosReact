import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import image from '../../assets/portfolio.svg'

function Portfolio() {
    return (
        <>
        <Header image={image}
            description="Ilustração Mulher com portfólio">Meus Projetos</Header>
        
        <Footer />

        </>
    )
}

export default Portfolio