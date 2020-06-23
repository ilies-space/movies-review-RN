import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { globaleStyles, images } from '../styles/global';

import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  const rating = navigation.getParam('rating');

  return (
    <View style={globaleStyles.container}>
      <Card>
        <Text> {navigation.getParam('title')}</Text>
        <Text> {navigation.getParam('body')}</Text>
        <Image source={images.ratings[rating]} />
      </Card>
    </View>
  );
}
