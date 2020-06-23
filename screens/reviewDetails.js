import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { globaleStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globaleStyles.container}>
      <Card>
        <Text> {navigation.getParam('title')}</Text>
        <Text> {navigation.getParam('body')}</Text>
        <Image source={require('../assets/rating-3.png')} />
      </Card>
    </View>
  );
}
