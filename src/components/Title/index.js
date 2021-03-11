import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

export default function Title() {
  return (
    <View style={style.box}>
      <Text style={style.text}>Signos e Datas</Text>
    </View>
  );
}