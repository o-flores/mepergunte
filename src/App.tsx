import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <Route exact path="/mepergunte" component={Home} />
          <Route exact path="/mepergunte/rooms/new" component={NewRoom} />
          <Route path="/mepergunte/rooms/:id" component={Room} />
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
