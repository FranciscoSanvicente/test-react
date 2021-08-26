import Contex from './components/context';
import BarChart from './components/BarChart';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Contex className="App">
      <BarChart />
      <Table />
    </Contex>
  );
}

export default App;
