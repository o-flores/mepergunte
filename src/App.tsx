import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <Route exact path="/" component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
