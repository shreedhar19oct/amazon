import react, {Component, component} from 'react';
import classes from './App.module.css'
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/productDetails';
import ProductData from './utils/ProductData';

class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    showHeartBeatSection: false,
  }
  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    let updatedState = false;
    if(pos === 1){
      updatedState=true;
    }
    this.setState({showHeartBeatSection: updatedState});
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
        <ProductPreview currentPreviewImage={this.state.productData.colorOptions
        [this.state.currentPreviewImagePos].imageUrl}
        showHeartBeatSection={this.state.showHeartBeatSection} />
        </div>

        <div className={classes.ProductData}>
          <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
          currentPreviewImagePos={this.state.currentPreviewImagePos}
          onFeatureItemClick={this.onFeatureItemClick}  showHeartBeatSection={this.state.showHeartBeatSection} />
        </div>

      </div>
    </div>
  );
}    
}

export default App;
