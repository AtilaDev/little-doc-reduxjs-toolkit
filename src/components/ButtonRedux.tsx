import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from '../features/counter/counterSlice';

const ButtonRedux = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <TouchableOpacity
        onPress={() => dispatch(increment())}
        style={[styles.touchContainer, styles.btnColor1]}>
        <Text style={styles.text}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={[styles.touchContainer, styles.btnColor2]}>
        <Text style={styles.text}>Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(incrementByAmount(10))}
        style={[styles.touchContainer, styles.btnColor3]}>
        <Text style={styles.text}>Increment in 10</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(decrementByAmount(5))}
        style={[styles.touchContainer, styles.btnColor5]}>
        <Text style={styles.text}>decrement in 5</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(reset())}
        style={[styles.touchContainer, styles.btnColor4]}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonRedux;

const styles = StyleSheet.create({
  touchContainer: {
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  btnColor1: {
    backgroundColor: 'black',
  },
  btnColor2: {
    backgroundColor: 'green',
  },
  btnColor3: {
    backgroundColor: 'blue',
  },
  btnColor4: {
    backgroundColor: 'red',
  },
  btnColor5: {
    backgroundColor: 'brown',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
