/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'

import ListItem from './ListItem'
import { Button, ButtonsContainer } from './ui/Button'
import { AddIcon, DeleteIcon } from './ui/Icons'
import Input from './ui/Input'
import { cn } from '../lib/utils'
import { TRANSITIONS } from '../lib/styles'

const ListTitle = ({ showTitleInput, title, handleTitleClick, handleTitleChange }) => {
    return (
        showTitleInput ? 
        <Input 
            value={title}
            onBlur={handleTitleClick} 
            onChange={handleTitleChange} 
            className='my-1 text-lg'
        /> : 
        <h3 
            className='my-1 text-lg border-b w-max px-1' 
            onClick={handleTitleClick}
        >
            {title}
        </h3>
    )
}

const List = ({ title, items, setLists, index, handleListDelete }) => {
    const [showTitleInput, setShowTitleInput] = useState(false)
    const [list, setList] = useState({
        title: title || 'New List',
        items: items || [
            {
                item: 'New Item',
                done: false
            }
        ]
    })

    useEffect(() => {
        setLists(prevLists => {
            const updatedLists = [...prevLists]
            updatedLists[index] = list

            return updatedLists
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list])

    const handleTitleClick = () => {
        setShowTitleInput(!showTitleInput)
    }

    const handleTitleChange = (e) => {
        setList({ ...list, title: e.target.value })
    }

    const updateListItems = (newItem) => {
        const newItemList = [...list.items, { item: newItem, done: false }]
        setList({ ...list, items: newItemList })
    }

    const handleListItemChange = (newItem, done, index) => {
        setList(prevList => {
            const updatedItems = [...prevList.items] // Clone the existing items array
            updatedItems[index] = { item: newItem, done } // Update the specific item
    
            return {
                ...prevList,
                items: updatedItems, // Update the items array in the state
            }
        })
    }

    const handleListItemDelete = (index) => {
        setList(prevList => {
            const updatedItems = [...prevList.items]
            updatedItems.splice(index, 1)

            return {
                ...prevList,
                items: updatedItems
            }
        })
    }

    const handleListDeleteButtonClick = () => {
        handleListDelete(index)
    }

    const handleNewButtonClick = () => {
        updateListItems('New Item')
    }

    return (
        <div className={cn('p-2 w-full md:w-1/2 hover:drop-shadow-md', TRANSITIONS)}>
            <div className='flex justify-between'>
                <ListTitle 
                    showTitleInput={showTitleInput} 
                    title={title} 
                    handleTitleClick={handleTitleClick} 
                    handleTitleChange={handleTitleChange} 
                />
                <ButtonsContainer>
                    <Button onClick={handleNewButtonClick}><AddIcon /></Button>
                    <Button onClick={handleListDeleteButtonClick}><DeleteIcon /></Button>
                </ButtonsContainer>
            </div>
            {list.items.map((item, index) => {
                return (
                    <ListItem 
                        key={index}
                        index={index} 
                        item={item.item} 
                        done={item.done} 
                        handleItemChange={handleListItemChange} 
                        handleItemDelete={handleListItemDelete}
                    />
                )
            })}
        </div>
    )
}

export default List