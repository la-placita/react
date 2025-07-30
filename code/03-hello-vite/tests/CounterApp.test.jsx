import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
  const initialValue = 10;

  test('debe hacer match con el snapshot', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen).toMatchSnapshot();
  });

  test('debe mostrar el valor inicial de 10', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test('debe incrementar con el botón +1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test('debe decrementar con el botón -1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test('debe reiniciar el contador al hacer click en el botón reset', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    
    fireEvent.click(screen.getByText('-1'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});