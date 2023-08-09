/* eslint-disable react/prop-types */

import { useState } from 'react'

import { Button, ButtonsContainer } from './ui/Button'
import { DeleteIcon, DoneIcon, EditIcon } from './ui/Icons'
import Input from './ui/Input'
import { cn } from '../lib/utils'
import { TRANSITIONS } from '../lib/styles'

const Description = ({ showItemInput, description, handleListItemClick, handleListItemChange, isHovered, done }) => {
    return (
        showItemInput ?
        <Input 
            value={description}
            onBlur={handleListItemClick} 
            onChange={handleListItemChange}
        /> :
        <div className='min-w-1/4 flex'>
            <p className={cn('px-1', TRANSITIONS, done && 'line-through text-gray-200')}>{description}</p>
            <EditIcon opacity={isHovered ? 0.5 : 0} />
        </div>
        
    )
}

const ListItem = ({ index, item, done, handleItemChange, handleItemDelete }) => {
    const [description, setDescription] = useState(item || 'New Item')
    const [showItemInput, setShowItemInput] = useState(false)
    const [isDone, setIsDone] = useState(done)
    const [isHovered, setIsHovered] = useState(false)

    const handleHoverEnter = () => {
        setIsHovered(true)
    }

    const handleHoverLeave = () => {
        setIsHovered(false)
    }

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
                'flex justify-between border rounded-lg my-2 p-1 px-2 hover:drop-shadow-lg',
                TRANSITIONS,
                done ? 'bg-slate-400' : 'bg-slate-200'
            )}
            onClick={handleListItemClick}
            onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}
        >
            <Description 
                showItemInput={showItemInput} 
                description={item || description} 
                handleListItemClick={handleListItemClick} 
                handleListItemChange={handleListItemChange}
                done={done}
                isHovered={isHovered}
            />
            <ButtonsContainer>
                <Button onClick={handleListItemDone}>
                    <DoneIcon done={done} />
                </Button>
                <Button onClick={handleListItemDelete}>
                    <DeleteIcon />
                </Button>
            </ButtonsContainer>
        </div>
    )
}

export default ListItem
