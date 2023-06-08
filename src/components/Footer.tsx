import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from 'src/context/auth';
import {Text} from 'react-native-animatable'


export default function Footer(){
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Home</Text>
      </Link>
      <Link href="/summary" style={styles.link}>
        <Text style={styles.linkText}>Summary</Text>
      </Link>
      {/* <Link href="/second" style={styles.link}>
        <Text style={styles.linkText}>Second</Text>
      </Link> */}
      <Link href="/main" style={styles.link}>
        <Text style={styles.linkText}>Main</Text>
      </Link>
      {user ? (
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText} onPress={() => signOut()}>Logout</Text>
        </Link>
      ) : (
        <Link href="/login" style={styles.link}>
          <Text style={styles.linkText}>Login</Text>
        </Link>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#f0f0f0',
  },
  link: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  linkText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#007bff',
  },
});


