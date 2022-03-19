import './assets/scss/index.scss'
import Home from './pages/home'

import {Provider} from 'react-redux'

import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
