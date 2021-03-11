import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

export default function List(props) {
  return (
    <View style={style.boxSigno}>
      <Text style={style.nameSigno}>
        {props.signo}
      </Text>

      <Text>
        Nascidos entre: {props.dataInicio} - {props.dataFim}
      </Text>
    </View>
  );
}