import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export default function Label({ text, style }) {
  return <Text style={[styles.label, style]}>{text}</Text>;
}
