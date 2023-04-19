import { Provider } from 'react-redux';
import { setupStore } from './store';
import './App.css';
import Shop from './pages/Shop/Shop';
import { Routes, Route } from 'react-router-dom';
import Basket from './pages/Basket/Basket';

const store = setupStore()

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/Fish' element={<Shop />}/>
        <Route path='/Basket' element={<Basket />}/>
      </Routes>
    </Provider>
  )
}

export default App;
