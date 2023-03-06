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
  }

  constructor(props: InputFieldProps) {
    super(props);
  }

  render() {
    const { placeholder, value, type, valueChanged } = this.props;

    return(
      // eslint-disable-next-line jsx-a11y/no-autofocus
      <input 
        className="formField"
        placeholder={placeholder} 
        value={value} 
        type={type === TextType.Password ? 'password' : 'text'}
        onChange={(event): void => {valueChanged(event.target.value)}}
        autoComplete="current-password"
      />
    );
  }
}

export default InputField;