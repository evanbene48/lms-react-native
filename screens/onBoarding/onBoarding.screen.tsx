import { Text, View } from 'react-native';
import React from 'react';
import { Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { LinearGradient } from 'expo-linear-gradient';

export default function OnBoardingScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <LinearGradient
      colors={['#E5ECF9', '#F6F7F9']}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View>
        <Text>onBoarding.keren</Text>
      </View>
    </LinearGradient>
  );
}
