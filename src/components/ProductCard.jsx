import React from 'react';

function ProductCard({ imageUrl, productName, tagline, price }) {
  return (
    <div className='productcard product_carousel__item'>
      <div className='product_carousel__img_wrapper'>
        <img src={imageUrl} alt={productName} />
      </div>
      <div className='product_carousel__item__wrapper'>
        <a href='' className='product_carousel_item__heading'>
          {productName}
        </a>
        <div className='product_carousel_item__price_wrapper'>
          <p className='product_carousel_item__tagline'>{tagline}</p>
          <p className='product_carousel_item__price'>${price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
