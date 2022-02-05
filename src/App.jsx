import './App.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  return (
    <>

   

      <div className='sup'>
        
        <div className='simulator-title'>
          <h2>Simulador de investimentos</h2>
        </div>

        <div className='onSide'>
          <Form/>
          <Results/>
        </div>

      </div>
    </>
  );
}

export default App;
