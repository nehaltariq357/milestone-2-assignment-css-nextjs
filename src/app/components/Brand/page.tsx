import React from 'react';
import Image from 'next/image';
const Brands = () => {
  return (
    <div className='brands-section'>
      <h1 className="brands-heading">Brands we work with</h1>
      <ul className='brand-logo'>
        <li><Image
        src="/brand1.png"
        alt='pic'
        width={200}
        height={200}
        /></li>
        <li><Image
        src="/brand2.png"
        alt='pic'
        width={200}
        height={200}
        /></li>
        <li><Image
        src="/brand3.png"
        alt='pic'
        width={200}
        height={200}
        /></li>
        <li><Image
        src="/brand4.png"
        alt='pic'
        width={200}
        height={200}
        /></li>
        
      </ul>
    </div>
  );
}

export default Brands;
