import logo from './logo.svg';
import './App.css';

function App() {
    const storeName = 'Pikaby';
    const storeAdress = 'Kirkland, WA';
    const storeContact = 'pikabu@gmail.com';
    const storeNumber = '425-221-1642';

  return (
    <div className="App">
        <h1>{storeName}</h1>
        <p>adress: {storeAdress + 'Juanita Beach'}</p>
        <h4>{storeAdress}</h4>
        <h4>{storeContact}</h4>
        <p>{'email'}</p>
        <p>phone number: {storeNumber}</p>
        <p>update</p>


      <header className="App-header">

        <a>
          Happy Spring
        </a>
      </header>
    </div>
  );
}

export default App;
