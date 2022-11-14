import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function Routes() {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
        }}
      >
        <StatusBar style="dark" />
        <AppRoutes />
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}

export default Routes;
