import styled from 'styled-components/native'
import { View, Button } from 'react-native'
import { Stack, Link, useRouter } from 'expo-router'
import LinkButton from 'src/components/LinkButton'
import {Text} from 'react-native-animatable'


export default function HomeScreen() {
  
  const router = useRouter();

  const handlePressHome = () => {
    router.push("/main")
  };

  const handlePressAbout = () => {
    // Logic for handling the About button press
  };

  const handlePressContact = () => {
    // Logic for handling the Contact button press
  };
  return (
    <S.Wrapper testID="home-screen">
      <Stack.Screen options={{ title: 'Home Screen', headerShown: false }} />
      <S.Title testID="home-screen-title">🏠 Halaman Utama 🏠</S.Title>
      <Link href="/login">Present modal login</Link>
      <S.Text testID="home-screen-text">Go lah to src/screens/Home.tsx to edit halaman ini</S.Text>
      <S.Text testID="link-to-main-text">Main<Link href={"/main"}>Go To Main Screen</Link></S.Text>

      <LinkButton href="/second" text="Go To Second Screen" />
      <Button
        title="Login"
        onPress={() => router.push("/login")}
      />
      
    </S.Wrapper>
  )
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
  Text: styled.Text`
    color: ${p => p.theme.primary};
    font-family: helvetica;
    font-weight: 300;
    font-size: ${p => p.theme.dimensions(15, 'px')};
    margin-bottom: ${p => p.theme.dimensions(15, 'px')};
  `
}
