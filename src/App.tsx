import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/rooms/new" component={ NewRoom } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
