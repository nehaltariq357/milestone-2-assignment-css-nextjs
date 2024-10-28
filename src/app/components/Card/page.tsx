import React from 'react';
import Image from 'next/image';

const Card = () => {
  return (
    <div className='cardsection'>
      <h1 className="card-heading">Explore the Coffee World</h1>
      <div className='gridsection'>
        <div className="card">
          <Image
            src="/card1.png" 
            alt="Cappuccino"
            width={400}
            height={400}
            className="card-image" 
          />
          <h1>Cappuccino</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, molestias! Eligendi, molestiae!</p>
          <button className="btn1">Order Now</button>
        </div>
        <div className="card">
          <Image
            src="/card2.png" 
            alt="Latte"
            width={400}
            height={400}
            className="card-image" 
          />
          <h1>Latte</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, molestias! Eligendi, molestiae!</p>
          <button className="btn1">Order Now</button>
        </div>
        <div className="card">
          <Image
            src="/card3.png" 
            alt="Espresso"
            width={400}
            height={400}
            className="card-image" 
          />
          <h1>Espresso</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, molestias! Eligendi, molestiae!</p>
          <button className="btn1">Order Now</button>
        </div>
        <div className="card">
          <Image
            src="/card4.png" 
            alt="Mocha"
            width={400}
            height={400}
            className="card-image"
          />
          <h1>Mocha</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, molestias! Eligendi, molestiae!</p>
          <button className="btn1">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
