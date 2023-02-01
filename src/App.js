import { Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts/Charts.js';
import Table from './components/Table/Table.js';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <nav>
        {/* <Link to="/table">Table</Link> */}
        <Button href="/table" varian="contained">
          Table
        </Button>
        {/* <Link to="/charts">Charts</Link> */}
        <Button href="/charts" varian="contained">
          Chart
        </Button>
      </nav>
      <Switch>
        <Route path="/table" component={Table} />
        <Route path="/charts" component={Charts} />
      </Switch>
    </div>
  );
}

export default App;
