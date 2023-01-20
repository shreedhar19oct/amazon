import react, {Component, component} from 'react';
import classes from './App.module.css'
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/productDetails';
import ProductData from './utils/ProductData';

class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    showHeartBeatSection: false,

  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon logo" />
        </nav>
      </header>

      <div className={classes.Maincontainer}>
        <div className={classes.ProductPreview}>
        <ProductPreview currentPreviewImage={this.state.currentPreviewImage}
        showHeartBeatSection={this.state.showHeartBeatSection} />
        </div>

        <div className={classes.ProductData}>
          <ProductDetails data={this.state.productData}/>
        </div>

      </div>
    </div>
  );
}    
}

export default App;
