/** @jest-environment jsdom */
// TODO: Tarea
// test: Debe de hacer maych con el snapshot
// test: Debe de mostrar el valor inicial de 100 <CounterApp value={100} />

import { CounterApp } from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";


describe('Pruebas en el archivo <CounterApp />', () => {

    const value = 10;

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />)
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {

        render(<CounterApp value={value} />)
        expect(screen.getByText(value)).toBeTruthy();

        // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
    })

    // Evnto Click

    test('Debe de incrementar con el boton + 1', () => {

        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
    })
    test('Debe de incrementar con el boton - 1', () => {

        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
    })

    test('Debe de funcionar el boton de rest', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}))
        expect(screen.getByText(value)).toBeTruthy();
        // screen.debug();

    })
})