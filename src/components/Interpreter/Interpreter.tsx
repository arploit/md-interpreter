import React, { useCallback } from 'react'
import './Interpreter.css'

type InpterpreterProps = {
    value: string
}
const Interpreter = ({ value }: InpterpreterProps) => {
    const interpreting = (inputString: string) => {
        let currentString = inputString.trim()
        if (currentString.startsWith('# ')) {
            let endOf = currentString.substring(2).indexOf(' ')
            return (
                <>
                    <h1>{currentString.substring(2, endOf)}</h1>
                    <p>
                        {currentString.substring(
                            endOf + 1,
                            currentString.length
                        )}
                    </p>
                </>
            )
        }
        if (currentString.startsWith('## ')) {
            return <h2>{currentString.substring(3)}</h2>
        }
        if (currentString.startsWith('### ')) {
            return <h3>{currentString.substring(4)}</h3>
        }
        if (currentString.startsWith('`') && currentString.endsWith('`'))
            return (
                <span className='code'>
                    {currentString.substring(1, currentString.length - 1)}
                </span>
            )

        return <span>{currentString}</span>
    }

    return (
        <div className='live_preview'>
            Live Preview
            {interpreting(value)}
        </div>
    )
}

export default Interpreter
