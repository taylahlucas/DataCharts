import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { usernamePlaceholder, passwordPlaceholder } from '../utils/strings';

describe('Login', () => {
  it('submit button is disabled when username has not been entered', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    userEvent.type(screen.getByPlaceholderText(passwordPlaceholder), 'abc');
    expect(screen.getByText("Submit")).toBeDisabled();
  });

  it('submit button is disabled when password has not been entered', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    userEvent.type(screen.getByPlaceholderText(usernamePlaceholder), 'abc');
    expect(screen.getByText("Submit")).toBeDisabled();
  });


  it('submit button is disabled when username or password has not been entered', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    userEvent.type(screen.getByPlaceholderText(passwordPlaceholder), 'abc');
    userEvent.type(screen.getByPlaceholderText(usernamePlaceholder), 'abc');
    expect(screen.getByText("Submit")).toBeEnabled();
  });
});