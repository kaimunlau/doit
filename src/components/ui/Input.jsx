const Input = ({ value, onBlur, onChange }) => {
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
        />
    )
}

export default Input