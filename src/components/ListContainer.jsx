/* eslint-disable react/prop-types */

import List from './List'

const ListContainer = ({ lists, setLists }) => {
    const handleListDelete = (index) => {
        setLists(prevLists => {
            const updatedLists = [...prevLists]
            updatedLists.splice(index, 1)

            return updatedLists
        })
    }
    return (
        <div className='container md:w-2/3 md:flex md:mx-auto md:place-content-center md:flex-wrap' id='list-container'>
            {lists.map((list, index) => {
                return (
                    <List 
                        key={index} 
                        index={index} 
                        title={list.title} 
                        items={list.items} 
                        setLists={setLists} 
                        handleListDelete={handleListDelete} 
                    />
                )
            })}
        </div>
    )
}

export default ListContainer