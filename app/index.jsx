import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import {  router } from 'expo-router';
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
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A232A', // Darker, more refined background color
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures content stretches to the height of the screen
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40, // Added space to prevent text from touching the edges
  },
  mainContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 30, // Added padding on top for better spacing
  },
  logo: {
    width: 220,
    height: 60,
    marginTop: 30,
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 30,
    borderRadius: 12, // Softens the image corners
    borderWidth: 3,  // Adds a subtle border to define the image
    borderColor: '#4F79A6', // Cohesive with button color
    shadowColor: '#000', // Soft shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textContainer: {
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 18, 
    color: '#E0E0E0', // Light text color for readability
    fontFamily: 'Ubuntu-Bold', // Bold for emphasis
    textAlign: 'center',
    lineHeight: 28, // More breathing room for readability
    paddingHorizontal: 15,
  },
  joinText: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold', // Makes the call-to-action stand out
    color: '#D1D8E0', // Light gray text
    marginTop: 30,
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: '85%', // Prevents text from being too wide on larger screens
    paddingHorizontal: 20,
  },
  button: {
    width: '80%', // Slightly smaller button for a more balanced look
    marginTop: 40,
    borderRadius: 12, // Softer rounded edges for modern feel
    backgroundColor: '#4F79A6', // Stylish blue button color
    paddingVertical: 16, // Padding for a taller button
    alignItems: 'center',
    shadowColor: '#4F79A6', // Subtle shadow for the button to stand out
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
