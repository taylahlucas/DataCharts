import React from 'react';

interface ButtonProps {
  children: string;
  className: any;
  disabled: boolean;
}

class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const { children, className, disabled } = this.props;

    return (
      <button className={className} disabled={disabled}>
        {children}
      </button>
    );
  }
}

export default Button;