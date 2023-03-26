import React from 'react';
import Header from './component/Header/Header';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import './App.css';
import Main from './component/Main/Main';

const store = setupStore()

function App() {
  return (
    <Provider store={store}>
        <Header />
        <Main />
    </Provider>
  )
}

export default App;
