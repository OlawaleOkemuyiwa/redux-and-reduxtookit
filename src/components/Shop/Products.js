import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    title: 'Tecno Camon 17 Pro',
    price: 190,
    description: 'A powerful yet affordable smartphone',
    id: 'P1'
  },
  {
    title: 'LG 55" UHD TV, 4k Smart, AV, 3 HDMI',
    price: 239,
    description: 'State-of-the-art television like no other',
    id: 'P2'
  },
  {
    title: 'Play Station 5',
    price: 185,
    description: 'The latest gaming console from Sony',
    id: 'P3'
  },
  {
    title: 'Nokia 7 Plus 2018 6.0-Inch',
    price: 145,
    description: 'The latest smartphone from Nokia',
    id: 'P4'
  },
  {
    title: 'Iphone 12 - 128gb',
    price: 650,
    description: 'A whole new experience with mobile phone',
    id: 'P5'
  },
  
]

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem 
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
