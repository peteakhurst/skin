import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CallOutSection from './components/CallOutSection';
import ProductCard from './components/ProductCard';
import ProductCardImage from './components/ProductCardImage';
import './App.css';
import ScrollingText from './components/ScrollingText';

import ProductImage1 from './assets/productImg1.jpg';
import ProductImage2 from './assets/productImg2.png';
import ProductImage3 from './assets/productImg3.jpg';

function App() {
  const products = [
    {
      id: 1,
      imageUrl: ProductImage1,
      productName: 'Goat glow milk',
      tagline: 'Gently cleanses oil',
      price: 60,
    },
    {
      id: 2,
      imageUrl: ProductImage2,
      productName: 'royal raw honey elixir',
      tagline: 'Restore radiance',
      price: 120,
    },
  ];

  return (
    <>
      <div className=''>
        <Header />
        <HeroBanner />
        <CallOutSection />
        <div className='product_carousel__container' id='shop-section'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              productName={product.productName}
              tagline={product.tagline}
              price={product.price}
            />
          ))}
          <ProductCardImage
            imageUrl={ProductImage3}
            productName='tallow peptide cloud cream'
            tagline='Glow Complexion'
            price='90'
          />
        </div>
        <div className='btn-wrapper'>
          <a
            href='#shop-section'
            className='animated-border product_carousel__shop_link'
          >
            Shop the range
          </a>
        </div>
      </div>
      <ScrollingText />
    </>
  );
}

export default App;
