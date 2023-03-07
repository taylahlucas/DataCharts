import { render, screen } from '@testing-library/react';
import DataView from '../components/general/DataView';
import { UnitData } from '../utils/interfaces';

describe('DataView', () => {
  const mockData = [
    {
      index: 1,
      title: "Test",
      attributes: [{
        name: "length",
        value: 10,
        unit: "m"
      }]
    }
  ]

  it('renders the DataView with the correct data', () => {
    render(<DataView data={mockData[0].attributes as unknown as UnitData[]} />);
    const dataView = screen.getByTestId('data-view');
    const rows = dataView.getElementsByTagName('tr');
    
    expect(rows.length).toBe(mockData[0].attributes.length);
    for (let i = 0; i < mockData.length; i++) {
      expect(screen.getByTestId(`name-${i}`)).toHaveTextContent(mockData[i].attributes[0].name);
      expect(screen.getByTestId(`value-${i}`)).toHaveTextContent(String(mockData[i].attributes[0].value));
      expect(screen.getByTestId(`unit-${i}`)).toHaveTextContent(mockData[i].attributes[0].unit);
    }
  });
});