import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products, Navbar} from './components';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});



  const fetchProducts = async () => {
  	const { data } = await commerce.products.list();
    
    setProducts(data);

  }

  const fetchCart = async () => {

  	 setCart(await commerce.cart.retrieve())


  }

  const handleAddToCart = async(productId, quanitity) => {
      const item = await commerce.cart.add(productId, quanitity);

      setCart(item.cart);

      console.log(item)
  }

  useEffect(() => {

  	  fetchProducts();
  	  fetchCart();



  }, [])

  
  return (
    <div className="App">

       <Navbar totalItems={cart.total_items}/>

       <Products products={products} onAddToCart={handleAddToCart}/>
     
    </div>
  );
}

export default App;
