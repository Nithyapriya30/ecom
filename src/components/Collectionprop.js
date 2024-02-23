import React from 'react';
import CollectionSection from './Collection';
import shirt1 from '../Assets/images/shirt1.png';
import shirt2 from '../Assets/images/shirt2.png';
import shirt3 from '../Assets/images/shirt3.png';
import shirt4 from '../Assets/images/shirt4.png';
import shirt5 from '../Assets/images/shirt5.png';
import shirt6 from '../Assets/images/shirt6.png';
const Collectionprop = () => {
  const collectionItems = [
    {  imageSrc: shirt1, title: 'Gray Shirt', price: 45.50 },
    {  imageSrc: shirt2, title: 'Gray Shirt', price: 45.50 },
    {  imageSrc: shirt3, title: 'Gray Shirt', price: 45.50 },
    {  imageSrc: shirt4, title: 'Gray Shirt', price: 45.50 },
    {  imageSrc: shirt5, title: 'Gray Shirt', price: 45.50 },
    {  imageSrc: shirt6, title: 'Gray Shirt', price: 45.50 },
    {  imageSrc: shirt4, title: 'Gray Shirt', price: 45.50 },
    {  imageSrc: shirt5, title: 'Gray Shirt', price: 45.50 },
  ];
  return (
    <div>
      <CollectionSection items={collectionItems} />
    </div>
  );
};

export default Collectionprop;
