import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CallOutSection from './components/CallOutSection';
import ProductCard from './components/ProductCard';
import ProductCardImage from './components/ProductCardImage';
import './App.css';
import ScrollingText from './components/ScrollingText';

function App() {
  const products = [
    {
      id: 1,
      imageUrl: 'src/assets/productimg1.jpg',
      productName: 'Goat glow milk',
      tagline: 'Gently cleanses oil',
      price: 60,
    },
    {
      id: 2,
      imageUrl: 'src/assets/productImg2.png',
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
            imageUrl='src/assets/productImg3.jpg'
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
