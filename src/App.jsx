import { useEffect, useState } from 'react'

import ListContainer from './components/ListContainer'
import { Button } from './components/ui/Button'

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
        <main className='container h-screen mx-auto p-2'>
            <div className='border-b flex justify-between'>
                <h1 className='text-2xl'>Do.it</h1>
                <Button onClick={handleNewListButtonClick}>new list</Button>
            </div>
            <ListContainer lists={lists} setLists={setLists} />
            {/* footer */}
        </main>
    )
}

export default App
