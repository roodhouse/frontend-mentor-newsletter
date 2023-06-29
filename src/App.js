import './App.css';
import Main from '../src/components/Main'
import Thanks from '../src/components/Thanks'

function App() {
  return (
    <div className="App">
      <div id='wrapper'>
        <div id='mainWrapper' className='hidden'>
          <Main />
        </div>
        <div id='thanksWrapper' className=''>
          <Thanks />
        </div>
      </div>
    </div>
  );
}

export default App;
