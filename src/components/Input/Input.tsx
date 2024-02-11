import React from 'react'
import './Input.css'

type InputProps = {
    value: string
    onInputChange: (event: string) => void
}
const Input = ({ value, onInputChange }: InputProps) => {
    return (
        <div className='input_block'>
            Input Your Text Here
            <div
                contentEditable='true'
                style={{ background: 'green' }}
                onBlur={(e) => onInputChange(e.currentTarget.innerHTML)}></div>
        </div>
    )
}

export default Input
