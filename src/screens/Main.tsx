import React, { useState, Component } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import { Link, Stack, useRouter } from 'expo-router'
import { useAuth } from 'src/context/auth'


export default function MainScreen() {
    const {signOut}  = useAuth();
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {/* Use the `Screen` component to configure the layout. */}
            <Stack.Screen options={{ title: "Main Screen", headerShown: false }} />
            {/* Use the `Link` component to enable optimized client-side routing. */}
            <Link href="/">Go Back to Home</Link>
            <Text onPress={() => signOut()}>Sign Out</Text>
        </View>
    );
}