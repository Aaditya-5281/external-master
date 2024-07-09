import React from 'react';
import './Cart.css';
const products = [
  {
    id: 1,
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
    title: 'Apple iPhone 15',
    description: 'Black, 128 GB',
    stock: 'Out Of Stock',
    stockStatus: false
  },
  {
    id: 2,
    image: 'https://images-cdn.ubuy.co.in/666e62a4b5dc903d857b1d54-samsung-galaxy-s21-ultra-5g-128gb.jpg',
    title: 'Samsung Galaxy S21 Ultra',
    description: 'Phantom Black, 256GB',
    stock: 'In Stock',
    stockStatus: true
  },
  {
    id: 3,
    image: 'https://d2xamzlzrdbdbn.cloudfront.net/products/3879f792-66e0-43ec-adf4-73cbb0bfad64_416x416.jpg',
    title: 'OnePlus 9 Pro',
    description: 'Morning Mist, 128GB',
    stock: 'Out Of Stock',
    stockStatus: false
  },
  {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/61oQtjPpM-L._AC_UF1000,1000_QL80_.jpg',
    title: 'Google Pixel 6',
    description: 'Sorta Seafoam, 128GB',
    stock: 'In Stock',
    stockStatus: true
  },
  {
    id: 5,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481',
    title: 'MacBook Pro 14"',
    description: 'Space Gray, M2 Pro, 16GB RAM, 512GB SSD',
    stock: 'In Stock',
    stockStatus: true
  },
  {
    id: 6,
    image: 'https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_UF1000,1000_QL80_.jpg',
    title: 'Dell XPS 15',
    description: 'Silver, Intel i7, 32GB RAM, 1TB SSD',
    stock: 'In Stock',
    stockStatus: true
  },
  {
    id: 7,
    image: 'https://m.media-amazon.com/images/I/71p-M3sPhhL.jpg',
    title: 'Lenovo ThinkPad X1 Carbon',
    description: 'Black, Intel i5, 16GB RAM, 256GB SSD',
    stock: 'Out Of Stock',
    stockStatus: false
  },
  {
    id: 8,
    image: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UF1000,1000_QL80_.jpg',
    title: 'HP Spectre x360',
    description: 'Nightfall Black, Intel i7, 16GB RAM, 512GB SSD',
    stock: 'In Stock',
    stockStatus: true
  },
  {
    id: 9,
    image: 'https://m.media-amazon.com/images/I/61RJn0ofUsL._AC_UF1000,1000_QL80_.jpg',
    title: 'Custom Gaming PC',
    description: 'RGB, AMD Ryzen 9, 32GB RAM, 2TB SSD, RTX 3080',
    stock: 'In Stock',
    stockStatus: true
  },
  {
    id: 10,
    image: 'https://m.media-amazon.com/images/I/71E4ninvijL._AC_UF1000,1000_QL80_.jpg',
    title: 'Apple iMac 24"',
    description: 'Blue, M1 Chip, 8GB RAM, 256GB SSD',
    stock: 'Out Of Stock',
    stockStatus: false
  }
];

function Cart() {
  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img
            src={product.image}
            alt={product.title}
          />
          <div className="card-body">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-description fs-5">{product.description}</p>
            <p className={`card-stock ${product.stockStatus ? 'text-success' : 'text-danger'}`}>
              {product.stock}
            </p>
            <div className="card-actions">
              <button className="btn btn-outline-info">Save for Later</button>
              <button className="btn btn-outline-danger">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
