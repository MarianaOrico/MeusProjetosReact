import './cards.css'

function Cards(props) {
    return (
        <div className='card'>
            <img src={props.image} />
            <a href={props.link}>
                <h1>{props.title}</h1>
            </a>
            <p>{props.text}</p>
        </div>
    )
}

export default Cards