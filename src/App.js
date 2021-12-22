import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Views/Main';
import CreatePirate from './Views/CreatePirate';
import ViewPirate from './Views/ViewPirate';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/create">
          <CreatePirate/>
        </Route>
        <Route exact path="/view/:id">
          <ViewPirate/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

