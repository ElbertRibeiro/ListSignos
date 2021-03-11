import React from 'react';
import { View } from 'react-native';


import List from '../List';
import style from './style';

export default function Signos() {
  return (
    
    <View style={style.list}>
      <List signo="Aquário" dataInicio="21/01" dataFim="19/02" />
      <List signo="Peixes" dataInicio="20/02" dataFim="20/03" />
      <List signo="Áries" dataInicio="21/03" dataFim="20/04" />
      <List signo="Touro" dataInicio="21/04" dataFim="21/05" />
      <List signo="Gêmeos" dataInicio=" 22/05" dataFim="21/06" />
      <List signo="Câncer" dataInicio="21/06" dataFim="23/07" />
      <List signo="Leão" dataInicio="24/07" dataFim="23/08" />
      <List signo="Virgem" dataInicio="24/08" dataFim="23/09" />
      <List signo="Libra" dataInicio="24/09" dataFim="23/10" />
      <List signo="Escorpião" dataInicio="24/10" dataFim="22/11" />
      <List signo="Sagitário" dataInicio="23/11" dataFim="21/12" />
      <List signo="Capricórnio" dataInicio="22/12" dataFim="20/01" />
    </View>  
  );
}
