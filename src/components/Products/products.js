import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/product' 

const products = [
   {id: 1, name: 'Shoes', description:'Running shoes.', price: '$200'},
   {id: 2, name: 'Macbook', description:'Macbook Pro 2021' , price: '$300'},
   {id: 3, name: 'PC', description:'PC Gamming', price: '$2000'},
];


const Products = () => {
	return(
			<main>
			    <Grid container justify="center" spacing={4}>
			       {products.map((product) => (
			       	<Grid item key={product.id} xs={12} sm={6} lg={3}>
			       	   <Product product={product} />
			       	</Grid>
			       ))}

			    </Grid>
			</main>
	)

}


export default Products;