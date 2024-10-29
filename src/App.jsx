import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://breynersmartinez.github.io/ValboriaShop/Images/1000081182_preview_rev_1%20(1).png" className="App-logo" alt="logo" />
        <p>
          Valboria<span className="heart"> Tienda Online </span> React
        </p>
        <p className="small">
          Has <code> tus compras de la forma mas sencilla </code> y segura.
        </p>
       
        <p>
        <button className='button_back'>
        <a
            className="App-link"
            href="https://breynersmartinez.github.io/ValboriaShop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Volver a pagina de inicio
          </a>
          </button>
         
        </p>
      </header>
    </div>
  );
}

export default App;
