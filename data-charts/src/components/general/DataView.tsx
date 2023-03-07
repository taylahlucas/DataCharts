import React from 'react';
import { UnitData } from '../../utils/interfaces';

interface DataViewProps {
  data?: UnitData[];
};

class DataView extends React.Component<DataViewProps> {
  render() {
    const { data } = this.props;
    return (
      <table className='dataView padding10 margin10'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Metric</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody data-testid='data-view'>
            {data?.map((item: UnitData, index: number) => 
            <tr key={item.name}>
              <td data-testid={`name-${index}`}>{item.name}</td>
              <td data-testid={`unit-${index}`}>{item.unit}</td>
              <td data-testid={`value-${index}`}>{item.value}</td>
            </tr>
            )}
        </tbody>
      </table>
    );
  };
};

export default DataView;