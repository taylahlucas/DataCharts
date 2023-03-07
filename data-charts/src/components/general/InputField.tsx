import React from 'react';
import { TextType } from '../../utils/enums';

interface InputFieldProps {
  placeholder: string;
  value: string;
  type?: TextType;
  valueChanged: (value: string) => void;
}

class InputField extends React.Component<InputFieldProps> {
  static defaultProps = {
    type: TextType.Regular
  };

  render() {
    const { placeholder, value, type, valueChanged } = this.props;
    return(
      <input 
        className='formField paragraph'
        placeholder={placeholder} 
        value={value} 
        type={type === TextType.Password ? 'password' : 'text'}
        onChange={(event): void => {valueChanged(event.target.value)}}
        autoComplete="current-password"
      />
    );
  };
};

export default InputField;