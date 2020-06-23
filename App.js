import React, { useState } from 'react';
import { StyleSheet, Text, View, AppLoading, Button } from 'react-native';
import Home from './screens/home';
import Navigator from './routes/drawer';
import About from './screens/about';

export default function App() {
  return <Navigator />;
}
