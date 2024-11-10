import logo from './logo.svg';
import BoxList from './BoxList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BoxList fields={{text: 'text', width: 'text', height: 'text', backgroundColor: 'text'}} />
    </div>
  );
}

export default App;
