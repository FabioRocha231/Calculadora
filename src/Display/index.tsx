import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles'

type Props = {
  value: string;
}

function Display({ value }: Props){
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue}>
        {value}
      </Text>
    </View>
  );
}

export { Display }