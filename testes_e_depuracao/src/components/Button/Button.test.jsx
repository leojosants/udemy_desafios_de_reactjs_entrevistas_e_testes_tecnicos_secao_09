import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from "./ButtonComponent";

test('verifica a alteração do texto inicial ao ser clicado', () => {
    render(<Button />);

    // capture
    const button_element = screen.getByRole("button", { name: /Clique aqui/i });
    const text = screen.getByTestId('text');

    expect(text).toHaveTextContent('Texto inicial');
    fireEvent.click(button_element);
    expect(text).toHaveTextContent('Texto alterado após clique');
});