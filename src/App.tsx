import React from 'react';
import Header from './component/Header/Header';
import Gallery from './component/Gallery/Gallery';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import './App.css';

const store = setupStore()

function App() {
  return (
    <Provider store={store}>
        <Header />
        <Gallery />
    </Provider>
  )
}

export default App;
