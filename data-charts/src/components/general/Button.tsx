import React from 'react';

interface ButtonProps {
  title: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
};

class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    disabled: false
  };

  render() {
    const { title, className, disabled, onClick } = this.props;
    return (
      <button 
        className={className} 
        disabled={disabled} 
        onClick={onClick}
      >
        {title}
      </button>
    );
  };
}

export default Button;