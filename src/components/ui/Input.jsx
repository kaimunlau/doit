import { cn } from "../../lib/utils"

const Input = ({ value, onBlur, onChange, className }) => {
    const handleEnterKeyDown = (e) => {
        e.keyCode === 13 && e.target.blur()
    }

    const handleFocus = (e) => {
        e.target.select()
    }

    return (
        <input 
            value={value} 
            autoFocus 
            onFocus={handleFocus}
            onBlur={onBlur} 
            onChange={onChange} 
            onKeyDown={handleEnterKeyDown}
            className={cn('border-b outline-0 rounded-xl px-1', className)}
        />
    )
}

export default Input