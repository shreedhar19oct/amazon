import classes from './App.module.css'
import ProductPreview from './ProductPreview';
import ProductDetails from './productDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon logo" />
        </nav>
      </header>

      <div className={classes.Maincontainer}>
        <div className={classes.ProductPreview}>
        <ProductPreview />
        </div>

        <div className={classes.ProductData}>
          <ProductDetails />
        </div>

      </div>
    </div>
  );
}

export default App;
