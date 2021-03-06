import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import CharacteristicCard from '../../components/Characteristic';

describe('Testing Characteristic Component', () => {
  test('does the component render correctly', () => {
    render(<CharacteristicCard characteristic="Test Characteristic 1" value="Test Value 1" />);
    expect(screen.getByText('Test Characteristic 1'));
    expect(screen.getByText('Test Value 1'));
  });
});
