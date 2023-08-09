/* eslint-disable react/prop-types */

import { TRANSITIONS } from '../../lib/styles'
import { cn } from '../../lib/utils'

export const ButtonsContainer = ({ children }) => {
    return <div className='flex items-bottom'>{children}</div>
}

export const Button = ({ children, onClick, className }) => {
    return (
        <button 
            className={cn(
                'text-sm mx-0.5 hover:scale-110', 
                TRANSITIONS, 
                className
            )} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}