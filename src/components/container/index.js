import React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';

import styles from './styles';

export default function Container({ children, isScrollable, bodyStyle }) {
  return (
    <SafeAreaView style={styles.container}>
      {isScrollable ? (
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
          <View style={[styles.innerView, bodyStyle]}>{children}</View>
        </ScrollView>
      ) : (
        <View style={[styles.innerView, bodyStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}
