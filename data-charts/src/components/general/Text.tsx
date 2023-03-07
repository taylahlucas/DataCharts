import React from 'react';

interface TextProps {
  children: string;
  className?: string;
};

class Text extends React.Component<TextProps> {
  render() {
    const { children, className } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
};

export default Text;