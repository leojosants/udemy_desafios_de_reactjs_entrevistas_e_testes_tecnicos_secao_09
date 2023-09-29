import './App.css'
import Button from './components/Button/Button';
import Greeting from './components/Greeting/GreetingComponent';

function App() {
  const style_data_div = [{ border: '1px solid red', marginBottom: '20px', padding: '1rem' }];

  return (
    <>
      {/* 1 - component tests */}
      <div style={style_data_div[0]} data-div>
        <h2>1 - Testes em componente</h2>
        <Greeting name={'Leonardo'} />
      </div>

      {/* 2 - event simulation tests */}
      <div style={style_data_div[0]} data-div>
        <h2>2 - Testes simulação de evento</h2>
        <Button />
      </div>
    </>
  );
}

export default App;