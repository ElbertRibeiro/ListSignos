
import React from 'react';
import { View } from 'react-native';

import Signos from '../components/Signos';
import Titles from '../components/Title';

export default function HomePage() {
  return (
    <View>
      <Titles />
      <Signos />      
    </View>
  );
}
