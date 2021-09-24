import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import CardEx from './pages/CardEx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>

        <Route path="/card">
          <CardEx />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
