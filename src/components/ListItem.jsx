/* eslint-disable react/prop-types */

import { useState } from 'react'

import { cn } from '../lib/utils'
import { ItemButton } from './ui/Button'

const Description = ({ showItemInput, description, handleListItemClick, handleListItemChange, done }) => {
    return (
        showItemInput ?
        <input 
            value={description} 
            autoFocus 
            onBlur={handleListItemClick} 
            onChange={handleListItemChange} 
        /> :
        <p className={done && 'line-through text-gray-200'}>{description}</p>
    )
}

const ListItem = ({ index, item, done, handleItemChange, handleItemDelete }) => {
    const [description, setDescription] = useState(item || 'New Item')
    const [showItemInput, setShowItemInput] = useState(false)
    const [isDone, setIsDone] = useState(done)

    const handleListItemClick = () => {
        setShowItemInput(!showItemInput)
    }

    const handleListItemChange = (e) => {
        setDescription(e.target.value)
        handleItemChange(e.target.value, isDone, index)
    }

    const handleListItemDone = (e) => {
        e.stopPropagation()
        setIsDone(!isDone)
        handleItemChange(description, !isDone, index)
    }

    const handleListItemDelete = (e) => {
        e.stopPropagation()
        handleItemDelete(index)
    }

    return (
        <div 
            className={cn(
                'flex justify-between border rounded-lg my-2 p-1 px-2',
                done ? 'bg-slate-400' : 'bg-slate-200'
            )}
            onClick={handleListItemClick}
        >
            <Description 
                showItemInput={showItemInput} 
                description={item || description} 
                handleListItemClick={handleListItemClick} 
                handleListItemChange={handleListItemChange} 
                done={done}
            />
            <div>
                <ItemButton onClick={handleListItemDone}>done</ItemButton>
                <ItemButton onClick={handleListItemDelete}>del</ItemButton>
            </div>
        </div>
    )
}

export default ListItem
