import React from 'react';
import Text from '../general/Text';

interface RangeSliderProps {
  range: number;
  currentTitle?: string;
  onChange: (value: number) => void;
};

class RangeSlider extends React.Component<RangeSliderProps> {
  render() {
    const { range, currentTitle, onChange } = this.props;
    return (
      <div className='width300'>
        <input 
          type='range' 
          className='rangeSlider' 
          min={0} 
          max={range}
          onChange={(event) => onChange(parseInt(event.target.value))} />
        <Text className='paragraph textCenter'>{currentTitle ?? ''}</Text>
      </div>
    );
  };
};

export default RangeSlider;