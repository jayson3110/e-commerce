import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './style';
import CartItem from  './CardItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({cart,  handleUpdateCartQty , handleRemoveFromCart, handleEmptyCart}) => {

   


	const classes = useStyles();
	const EmtyCart = () => (
		<Typography variant="subtitle">

		    You have no items in your shopping cart, start adding some!


		</Typography>
	);
	const FilledCart = () => (
	   <>
	     <Grid container spacing={3}>
	        {cart.line_items.map((item) => (
	        	<Grid item xs={12} sm={4} key={item.id}>
	        	   <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
	        	</Grid>

	        ))}
	     </Grid>
	     <div className={classes.cartDetails}>
	      	  <Typography variant="h4">
	      	       Subtotal: {cart.subtotal.formatted_with_symbol}
	      	  </Typography>

	        	<div>
	      	       <Button classNam={classes.emptyButton} onClick={handleEmptyCart} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
	      	       <Button classNam={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Check out</Button>
	        	</div>

	      </div>
	   </>
	);

	if(!cart.line_items) return "Loading.."

	return (
		<Container>

		    <div className={classes.toolbar}></div>
		    <Typography classes={classes.title} variant="h3" gutterBottom>You Shopping Cart</Typography>

		    { !cart.line_items.length ? <EmtyCart /> : <FilledCart />}
		</Container>

	)
}


export default Cart;