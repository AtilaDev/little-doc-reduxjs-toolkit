import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import ButtonRedux from './src/components/ButtonRedux';
import Counter from './src/components/Counter';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Counter />
        <ButtonRedux />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
