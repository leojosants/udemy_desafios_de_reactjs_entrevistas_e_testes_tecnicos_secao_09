import React, { useState } from 'react'

const Button = () => {
    const [message, setMessage] = useState('Texto inicial');

    const handleClick = () => {
        setMessage('Texto alterado após clique');
    };

    return (
        <div>
            <p data-testid='text'>{message}</p>
            <button onClick={handleClick}>Clique aqui</button>
        </div>
    )
}

export default Button