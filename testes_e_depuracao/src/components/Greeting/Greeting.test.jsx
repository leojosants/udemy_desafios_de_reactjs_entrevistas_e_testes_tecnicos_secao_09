import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from "./GreetingComponent";

test('verifica o heading do componente com a prop enviada', () => {
    render(<Greeting name={"Luan"} />);
    const heading_element = screen.getByRole("heading");
    expect(heading_element).toHaveTextContent("Hello, Luan");
});