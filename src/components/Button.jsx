import React from 'react';

function Button({ url, buttonText }) {
  return (
    <a href={url} className='button'>
      {buttonText}
    </a>
  );
}

export default Button;
