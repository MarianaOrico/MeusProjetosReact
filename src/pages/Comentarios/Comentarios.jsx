import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import image from '../../assets/learning.svg'
import './comentarios.css'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import { useState, useEffect } from 'react'

function Comentarios() {
    const getLocalList = () => {
        let items = localStorage.getItem('list')
        if (items) {
            return JSON.parse(localStorage.getItem('list'))
        } else {
            return []
        }
    }
    const [list, setList] = useState(getLocalList)
    const [newItem, setNewItem] = useState('')

    function handleCreateNewItem() {
        const item = {
            id: Math.random(),
            title: newItem
        }

        if (item.title === '') {
            return
        }

        setList([...list, item])
        setNewItem('')
    }

    function handleRemoveItem(id) {
        const filteredItems = list.filter(item => item.id !== id)
        setList(filteredItems)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return (
        <>
            <Header
                image={image}
                description="ilustracao mulher com coração"
            >
                Dicas, feedbacks e mensagens do coração
            </Header>
            <section className="list">
                <header>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Digite aqui"
                            onChange={(e) => setNewItem(e.target.value)}
                            value={newItem}
                        />
                        <div className="add-container">
                            <button
                                className="add-task"
                                type="submit"
                                onClick={handleCreateNewItem}
                            >
                                <FiPlus size={16} color="#bbb" />
                            </button>
                        </div>
                    </div>
                </header>
                <main>
                    <ul className="list-items">
                        {
                            list.map(item => {
                                return (
                                    <li key={item.id}>
                                        <div>
                                            <p>{item.title}</p>
                                        </div>
                                        <button
                                            className="remove-task"
                                            type="button"
                                            onClick={() => handleRemoveItem(item.id)}>
                                            <FiTrash2 size={16} />
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </main>
            </section>

            <Footer />
        </>

    )
}

export default Comentarios