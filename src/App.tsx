import { Provider } from 'react-redux';
import { setupStore } from './store';
import './App.css';
import { Shop } from './pages/Shop/Shop';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import {Recipe} from "./pages/Recipe/Recipe";

const store = setupStore()

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/Fish' element={<Shop />}/>
        <Route path='/order' element={<Cart />} />
        <Route path='/recipe' element={<Recipe />}></Route>
        <Route path='*' element={<Navigate to="/Fish" replace />} />
      </Routes>
    </Provider>
  )
}
