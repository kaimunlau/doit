/* eslint-disable react/prop-types */

import { cn } from '../../lib/utils'

export const ButtonsContainer = ({ children }) => {
    return <div className='flex items-bottom'>{children}</div>
}

export const Button = ({ children, onClick, className }) => {
    return <button className={cn('text-sm hover:scale-105', className)} onClick={onClick}>{children}</button>
}