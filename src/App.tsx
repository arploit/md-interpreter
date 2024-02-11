import React from 'react'
import Input from './components/Input'
import Interpreter from './components/Interpreter'
import './App.css'
const App = () => {
    const [inputValue, setInputValue] = React.useState('')
    return (
        <div className='App_block'>
            <Input value={inputValue} onInputChange={(e) => setInputValue(e)} />
            <div className='vertical_divison'></div>
            <Interpreter value={inputValue} />
        </div>
    )
}

export default App
