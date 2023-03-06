import React from 'react';
import Text from '../components/general/Text';
import InputField from '../components/general/InputField';
import Button from '../components/general/Button';
import { TextType } from '../utils/enums';
import { usernamePlaceholder, passwordPlaceholder } from '../utils/strings';

interface LoginState {
  username: string;
  password: string;
}

class Login extends React.Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  usernameHandler = (value: string) => {
     this.setState({ username: value })
  }
  
  passwordHandler = (value: string) => {
    this.setState({ password: value })
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className='login'>
        <Text className='heading textCenter margin10'>Welcome</Text>
        <Text className='paragraph textCenter margin10'>
          Please enter your login details
        </Text>
        <form className='form'>
          <InputField placeholder={usernamePlaceholder} value={username} valueChanged={this.usernameHandler} />
          <InputField placeholder={passwordPlaceholder} value={password} valueChanged={this.passwordHandler} type={TextType.Password}/>
        </form>
        <Button 
          className='button textCenter margin10' 
          disabled={username.length === 0 || password.length === 0}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default Login;