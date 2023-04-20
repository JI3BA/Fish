import { Provider } from 'react-redux';
import { setupStore } from './store';
import './App.css';
import Shop from './pages/Shop/Shop';
import { Routes, Route, Navigate } from 'react-router-dom';
import Basket from './pages/Cart/Cart';

const store = setupStore()

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/Fish' element={<Shop />}/>
        <Route path='/order' element={<Basket />}/>
        <Route path='*' element={<Navigate to="/Fish" replace />} />
      </Routes>
    </Provider>
  )
}

export default App;
