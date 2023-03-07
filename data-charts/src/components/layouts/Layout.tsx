import React from 'react';
import Text from '../../components/general/Text';

interface LayoutProps {
  children: any;
  title: string;
};

class Layout extends React.Component<LayoutProps> {
  render() {
    const { children, title } = this.props;
    return (
      <div className='layout'>
        <Text className='heading relative textCenter margin10 top40 display'>{title}</Text> 
        {children}
      </div>
    );
  };
};

export default Layout;