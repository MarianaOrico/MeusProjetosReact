import './cards.css'

function Cards(props) {
    return (
        <div className='card'>
            <img className='imgContatos' src={props.image} />
            <a className='linkContatos' href={props.link}>
                <h1>{props.title}</h1>
            </a>
            <p className='paragraph'>{props.text}</p>
        </div>
    )
}

export default Cards