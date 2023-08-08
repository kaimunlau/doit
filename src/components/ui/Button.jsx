/* eslint-disable react/prop-types */

import { cn } from '../../lib/utils'

export const Button = ({ children, onClick, className }) => {
    return <button className={cn('text-sm hover:scale-105', className)} onClick={onClick}>{children}</button>
}

export const ItemButton = ({ children, onClick }) => {
    return <Button className='px-1' onClick={onClick}>{children}</Button>
}