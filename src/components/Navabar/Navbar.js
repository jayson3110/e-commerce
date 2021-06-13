import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography} from
'@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';

import logo from '../../assets/image.png';

import useStyles from './style';

const Navbar = ({totalItems}) => {
	const classes = useStyles();
	return(

		<>
		  <AppBar position="fixed" classeName={classes.appBar} color="inherit">
		     <Toolbar>
		        <Typography variant="h6" className={classes.title} color="inherit">
		            <img src={logo} alt="E-CommerceJS" height="25px" className={classes.image} />
		            
		            HM Studio

		        </Typography>
		        <div className={classes.grow}/>
		        <div className={classes.button}>
		           <IconButton aria-label="Show cart items" color="inherit">
		               <Badge badgeContent={totalItems} color="secondary">
		                   <ShoppingCart />
		                </Badge>
		           </IconButton>
		        </div>
		     </Toolbar>
		  </AppBar>
		</>
	)
}

export default Navbar;