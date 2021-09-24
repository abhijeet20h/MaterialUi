import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
<<<<<<< Updated upstream
=======
import CardEx from './pages/CardEx';
import BoxExp from './pages/BoxExp';
import StyleEx from './pages/StyleEx';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======

        <Route path="/card">
          <CardEx />
        </Route>

        <Route path="/box">
          <BoxExp />
        </Route>

        <Route path="/style">
          <StyleEx />
        </Route>
>>>>>>> Stashed changes
      </Switch>
    </Router>
  );
}

export default App;
