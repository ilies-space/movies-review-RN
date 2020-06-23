import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { globaleStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globaleStyles.container}>
      <Text> {navigation.getParam('title')}</Text>
      <Text> {navigation.getParam('body')}</Text>
      <Text> {navigation.getParam('rating')}</Text>
    </View>
  );
}
