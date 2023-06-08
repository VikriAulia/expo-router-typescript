import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from 'src/screens/Login';

describe('LoginScreen', () => {
  test('renders login screen correctly', () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(<LoginScreen />);
    
    // Check if the title is rendered
    const title = getByTestId('login-screen-title');
    expect(title).toBeTruthy();
    expect(title.props.children).toBe('Login');
    
    // Check if the username and password inputs are rendered
    const usernameInput = getByPlaceholderText('Username');
    expect(usernameInput).toBeTruthy();
    
    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput).toBeTruthy();
    
    // Check if the login button is rendered
    const loginButton = getByText('Login');
    expect(loginButton).toBeTruthy();
    
    // Check if the forgot password link button is rendered
    const forgotPasswordButton = getByText('Forgot Password?');
    expect(forgotPasswordButton).toBeTruthy();
  });

  test('performs login on button press', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);
    
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');
    
    // Set values for username and password inputs
    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'testpassword');
    
    // Simulate button press
    fireEvent.press(loginButton);
    
    // Check if the login logic is executed correctly
    // In this example, we're checking if the console.log statements are called with the correct values
    expect(console.log).toHaveBeenCalledWith('Logging in...');
    expect(console.log).toHaveBeenCalledWith('Username:', 'testuser');
    expect(console.log).toHaveBeenCalledWith('Password:', 'testpassword');
  });
});
