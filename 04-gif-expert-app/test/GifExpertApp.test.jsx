import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el componente <GifExpertApp />', () => {

  const inputValue = 'Overwatch';

  test('Validar que no se agrege una categoria existente ', async () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);


    const items = await screen.findAllByText(inputValue);
    expect(items).toHaveLength(1);

    expect(screen.getAllByText(inputValue).length).toBeLessThan(2)
    screen.debug()
  });
});
