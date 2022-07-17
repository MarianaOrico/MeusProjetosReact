import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import image from '../../assets/projections.svg'
import './diario.css'

function Diario() {
    return (
        <>
            <Header
                image={image}
                descrption="Ilustração de uma mulher">
                Diário da Reprograma
            </Header>
            <main>
                <section className='sections'>
                    <div className='Github'>
                        <h2>Git e Github</h2>
                        <img className="imgGif" src='https://media3.giphy.com/media/l0He0cVv8lGggpruo/giphy.gif' />
                        <p>Aprender Git e Github foi um ótimo começo, pois consegui entender muito bem. Aprendemos a utilizar o terminal Git Bash e o terminal do VS Code, podendo subir os projetos individuais, a compartilhar o mesmo projeto com várias pessoas e commitando pedaços de códigos com o cuidado para não chocarem entre si, além de conseguir puxar atualizações do projeto. Com certeza saber o idioma inglês facilitou na leitura dos erros e assim pude corrigir com facilidade.</p>
                    </div>

                    <div className='HTML'>
                        <h2>HTML</h2>
                        <img className="imgGif" src='https://c.tenor.com/upZjDOWgvX8AAAAC/spongebob-too-easy.gif' />
                        <p>HTML é uma linguagem de marcação e bem prática. Já tenho familiaridade com o tema e essa parte estrutural é a mais simples e básica. Aprender sobre a hierarquia das tags foi muito importante para facilitar a construção do código também.</p>
                    </div>

                    <div className='CSS'>
                        <h2>CSS</h2>
                        <img className="imgGif" src='http://www.reactiongifs.com/r/2013/03/fabulous.gif' />
                        <p>Outra linguagem de marcação é o CSS, porém voltada para a aplicação de estilos do código. Muito utilizada, tem sido a minha parte favorita até então. Estudar sobre estilização do código tem sido muito divertido. São muitos componentes existentes a serem estudados. Sem dúvidas a melhor parte até agora, apesar de um pouco desafiador aplicar responsividade mobile após a responsividade da versão desktop.</p>
                    </div>

                    <div className='JavaScript'>
                        <h2>JavaScript</h2>
                        <img className="imgGif" src="https://www.zrobank.com.br/wp-content/uploads/2020/01/sheldon-nervoso.gif" />
                        <p>Aprender a linguagem de programação JavaScript com certeza não é tão fácil. É necessário conhecimento sobre raciocínio lógico e lógica de programação, aqui tem sido minha maior dificuldade, principalmente a sua sintaxe. Aprendemos sobre funções, seus métodos e propriedade, utilização do DOM, promises sync/await e a fazer requisição de API pelo JavaScript, além de poder testá-las. Sigo aprendendo.</p>
                    </div>

                    <div className='React'>
                        <h2>React</h2>
                        <img className="imgGif" src='https://c.tenor.com/miKgqpYcyX0AAAAC/shocked-happy.gif' />
                        <p>O framework React tem sido uma luz no fim do túnel nessa reta final do curso. A biblioteca do React veio para facilitar os códigos e tem sido muito útil aos projetos. Poder organizar o código para deixá-lo mais limpo e evitar repetição utilizando componentes e props é maravilhoso, além de entender sobre utilização de hooks e poder inserir libs externas! Tenho me apaixonado cada vez mais pelo React!</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Diario