import React from 'react';

interface TextProps {
  children: string;
  className: any;
}

class Text extends React.Component<TextProps> {
  constructor(props: TextProps) {
    super(props);
  }

  render() {
    const { children, className } = this.props;

    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

export default Text;