import React from 'react';
import Layout from '../components/layouts/Layout';
import Text from '../components/general/Text';
import InputField from '../components/general/InputField';
import Button from '../components/general/Button';
import { TextType } from '../utils/enums';
import { usernamePlaceholder, passwordPlaceholder } from '../utils/strings';
import { NavigateFunction } from 'react-router-dom';
import { withNavigation } from '../utils/helpers/withNavigation';

interface LoginProps {
  navigate: NavigateFunction;
};

interface LoginState {
  username: string;
  password: string;
};

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  };

  usernameHandler = (value: string) => {
     this.setState({ username: value })
  };
  
  passwordHandler = (value: string) => {
    this.setState({ password: value })
  };

  handleSubmit = () => {
    this.props.navigate('/dashboard');
  };

  render() {
    const { username, password } = this.state;
    return (
      <Layout title="Welcome">
        <Text className='paragraph textCenter margin10'>
          Please enter your login details
        </Text>
        <form className='form'>
          <InputField placeholder={usernamePlaceholder} value={username} valueChanged={this.usernameHandler} />
          <InputField placeholder={passwordPlaceholder} value={password} valueChanged={this.passwordHandler} type={TextType.Password}/>
        </form>
        <Button
          title="Submit"
          className='button textCenter margin10 paragraph' 
          disabled={username.length === 0 || password.length === 0}
          onClick={this.handleSubmit}
        />
      </Layout>
    );
  };
};

export default withNavigation(Login);