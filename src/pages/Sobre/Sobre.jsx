import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import image from '../../assets/profile-data.svg'

function Sobre() {
    return(
        <>
        <Header
            image={image}
            descrption="Ilustração de uma mulher"
            >
                Sobre mim
            </Header>
        
        <Footer />

        </>
    )
}

export default Sobre