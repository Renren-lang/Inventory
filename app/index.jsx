import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.mainContent}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
          
          <View style={styles.textContainer}>
            <Text style={styles.description}>
              From compact cars to family SUVs, luxury sedans to rugged trucks, our selection of new and pre-owned vehicles has something for every budget and style. Browse now!
            </Text>
          </View>
          
          <Text style={styles.joinText}>
            Join us, Let’s create One Ride at a Time
          </Text>
          
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-up')}
            containerStyles={styles.button}
          />
        </View>
      </ScrollView>
      
      <StatusBar backgroundColor="#478CCF" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3BF3', // Dark background for contrast
    paddingBottom: 40,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  mainContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    maxWidth: 400, // Limiting width on larger screens for better structure
    paddingHorizontal: 20,
  },
  logo: {
    width: 220,
    height: 60,
    marginTop: 30,
    marginBottom: 20, // More space between logo and description
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    color: '#E0E0E0', // Light text color for readability
    fontFamily: 'Ubuntu-Regular', // Slightly lighter for better text flow
    textAlign: 'center',
    lineHeight: 24, // More breathing room
    paddingHorizontal: 10, // Added padding to prevent text from touching edges
  },
  joinText: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold', // Makes the call-to-action stand out
    color: '#D1D8E0', // Light gray text for clarity
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: '85%',
    paddingHorizontal: 20,
  },
  button: {
    width: '80%',
    marginTop: 40,
    borderRadius: 12,
    backgroundColor: '#4F79A6', // Stylish blue button color
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4F79A6', // Subtle shadow for the button to stand out
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
