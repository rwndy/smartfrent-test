import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AddProducts, HomePage, ListProduct } from './pages'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/list-product" component={ListProduct} />
          <Route path="/add-product" component={AddProducts} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
