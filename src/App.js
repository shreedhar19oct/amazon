import logo from './logo.svg';
import classes from './App.module.css'
import ProductData from './ProductData';
import ProductPreview from './ProductPreview';

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
          {/* <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
          <div className={classes.TimeSection}>
            <p>{new Date().getHours()}:{new Date().getMinutes()}</p>
          </div>
          <div className={classes.HeartBeatSection}>
            <i class="fa-solid fa-heart-pulse"></i>
            <p>78</p>
          </div> */}
        </div>
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>
          <h3 className={classes.Sectionheading}>Select Color</h3>
          <div>
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red colored watch" />
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue colored watch" />
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple colored watch" />
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black colored watch" />
          </div>
          <h3 className={classes.Sectionheading}>Features</h3>
          <div>
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
