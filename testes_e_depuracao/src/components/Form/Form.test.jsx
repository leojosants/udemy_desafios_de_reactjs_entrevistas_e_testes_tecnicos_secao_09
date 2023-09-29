import React from "react";
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from "./FormComponent";

test('verifica se o submit ocorreu', () => {
    const handleSubmit = jest.fn();

    render(<Form onSubmit={handleSubmit} />);

    const input = screen.getByTestId('input_text');

    fireEvent.change(input, { target: { value: 'algum texto' } });
    fireEvent.submit(input);

    const success = screen.getByTestId('success');

    expect(success).toBeInTheDocument;
});