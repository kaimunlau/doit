import { useEffect, useState } from 'react'

import ListContainer from './components/ListContainer'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    const defaultList = [
        {
            title: 'New List',
            items: [
                {
                    item: 'New Item',
                    done: false
                },
            ],
        }
    ]
    const storedLists = JSON.parse(localStorage.getItem('lists'))
    const initialLists = storedLists && storedLists.length > 0 ? storedLists : defaultList
    const [lists, setLists] = useState(initialLists)

    const handleNewListButtonClick = () => {
        setLists([...lists, defaultList[0]])
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    }, [lists])

    return (
        <div className='flex flex-col container h-screen w-screen mx-auto p-2'>
            <Header handleNewListButtonClick={handleNewListButtonClick} />
            <main className='mt-12 flex-grow'>
                <ListContainer lists={lists} setLists={setLists} />
            </main>
            <Footer />
        </div>
    )
}

export default App
