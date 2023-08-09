import { useEffect, useState } from 'react'

import ListContainer from './components/ListContainer'
import { Button } from './components/ui/Button'
import { AddIcon } from './components/ui/Icons'
import Footer from './components/Footer'
import { cn } from './lib/utils'

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
            <header 
                className={cn(
                    'bg-slate-300 border-b flex justify-between fixed',
                    'top-0 left-0 right-0 py-2 px-2 md:px-10'
                )} 
                id='header'
            >
                <h1 className='text-2xl'>Do.it</h1>
                <Button onClick={handleNewListButtonClick}><AddIcon /></Button>
            </header>
            <main className='mt-12 flex-grow'>
                <ListContainer lists={lists} setLists={setLists} />
            </main>
            <Footer />
        </div>
    )
}

export default App
