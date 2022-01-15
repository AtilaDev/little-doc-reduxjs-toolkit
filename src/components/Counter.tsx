import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useAppSelector} from '../app/hooks';

const Counter = () => {
  const counterValue = useAppSelector(state => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.counterLabel}>Counter</Text>
      <Text style={styles.counterText}>{counterValue}</Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  counterLabel: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 62,
    color: 'green',
    fontWeight: 'bold',
  },
});
