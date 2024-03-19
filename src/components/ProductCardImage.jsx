function ProductCardImage({ imageUrl, productName, tagline, price }) {
  return (
    <div className='productcard productcard_image__item'>
      <div className='productcard_image__img_wrapper'>
        <img src={imageUrl} alt={productName} />
      </div>
      <div className='productcard_image__item__wrapper'>
        <a href='' className='productcard_image_item__heading'>
          {productName}
        </a>
        <div className='productcard_image_item__price_wrapper'>
          <p className='productcard_image_item__tagline'>{tagline}</p>
          <p className='productcard_image_item__price'>${price}</p>
        </div>
        <div className='productcard_image_btn_wrapper'>
          <button className='btn btn-outline-border'>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardImage;
