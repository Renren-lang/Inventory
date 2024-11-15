import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    // Implement your submit logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.mainContent}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.headerText}>Log in to Car Inventory</Text>
          
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.formField}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={styles.formField}
            secureTextEntry={true}
          />
          
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={styles.button}
            isLoading={isSubmitting}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have an account?
            </Text>
            <Link href="/sign-up" style={styles.footerLink}>
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2A36', // Darker background for contrast
    paddingBottom: 30,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30, // Adds vertical padding for better spacing
  },
  mainContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    maxWidth: 400, // Limits the width on large screens
    paddingHorizontal: 16,
  },
  logo: {
    width: 250,
    height: 70,
    marginTop: 40,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 28,
    color: '#fff', // White text for contrast
    fontFamily: 'Roboto-Bold', // Bold header for emphasis
    textAlign: 'center',
    marginBottom: 25,
  },
  formField: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: 30,
    borderRadius: 12,
    backgroundColor: '#4F79A6', // Stylish blue button
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#D1D8E0', // Light gray footer text for readability
  },
  footerLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF7F50', // Orange link color
    marginLeft: 5,
  },
});
