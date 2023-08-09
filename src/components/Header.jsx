import { Button } from './ui/Button'
import { AddIcon } from './ui/Icons'
import { cn } from '../lib/utils'

const Header = ({ handleNewListButtonClick }) => {
    return (
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
    )
}

export default Header