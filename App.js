import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BooksListingScreen from './src/screens/BooksListingScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
