import React, { useState } from 'react';
import { Stack, Link, useRouter, useNavigation, Redirect } from 'expo-router'
import styled from 'styled-components/native';
import { Button } from 'react-native';
import LinkButton from 'src/components/LinkButton';
import {useAuth } from 'src/context/auth';



export default function LoginScreen() {
  const navigation = useNavigation();
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = navigation.canGoBack();

  const {signIn} = useAuth();
  const {user} = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setLogin] = useState(false);

  if (user) {
    // Redirect to the login screen if the user is already autenticate.
    return <Redirect href="/" />;
  }

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in...');
    console.log('Username:', username);
    console.log('Password:', password);
    setLogin(true);
    console.log('Login status',isLogin);
    signIn();

  };

  return (
    <S.Wrapper testID="login-screen">
      <Stack.Screen options={{presentation: 'modal', headerShown:false }}/>
      {!isPresented && <Link href="../">Dismiss</Link>}
      <S.Title testID="login-screen-title">Login</S.Title>
      <S.Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <S.Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <LinkButton href="/forgot-password" text="Forgot Password?" />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
  Title: styled.Text`
    color: ${p => p.theme.primary};
    font-family: helvetica;
    font-weight: 900;
    font-size: ${p => p.theme.dimensions(20, 'px')};
    margin-bottom: ${p => p.theme.dimensions(10, 'px')};
  `,
  Input: styled.TextInput`
    width: 80%;
    height: 40px;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  `,
};
