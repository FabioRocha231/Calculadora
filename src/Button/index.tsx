import React from 'react';

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { styles } from './styles';

type Props = {
  onClick: (label:string) => void;
  label: string;
  double?: boolean;
  triple?: boolean;
  operation?: boolean;
}

function Button({onClick, label, double, triple, operation } : Props){
  const stylesButton = [styles.button];
  double? stylesButton.push(styles.buttonDouble) : null;
  triple? stylesButton.push(styles.buttonTriple) : null;
  operation? stylesButton.push(styles.operationButton) : null;
  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
}

export { Button }