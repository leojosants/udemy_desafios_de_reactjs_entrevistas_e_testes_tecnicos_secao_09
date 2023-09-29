import React, { useState } from 'react';

const Form = () => {
    const [value, setValue] = useState();
    const [submited, setSubmited] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!value) {
            alert('Campo em branco, favor preencher');
            return;
        }

        setSubmited(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder='Preencher...'
                data-testId='input_text'
            />
            <button type="submit">Enviar</button>
            {
                submited ? <p data-testId='success' style={{ color: 'green' }}>Formulário enviado</p> : <p style={{ color: 'red' }}>Formulário pendente</p>
            }
        </form>
    );
};

export default Form;