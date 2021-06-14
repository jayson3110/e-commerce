import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography} from
'@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';

import logo from '../../assets/image.png';
import {Link, useLocation} from 'react-router-dom';
import useStyles from './style';

const Navbar = ({totalItems}) => {
	const classes = useStyles();
	const location = useLocation();
	return(

		<>
		  <AppBar position="fixed" classeName={classes.appBar} color="inherit">
		     <Toolbar>
		        <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
		            <img src={logo} alt="E-CommerceJS" height="25px" className={classes.image} />
		            
		            HM Studio

		        </Typography>
		        <div className={classes.grow}/>
		        {location.pathname === '/' && (
		        <div className={classes.button}>
		           <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
		               <Badge badgeContent={totalItems} color="secondary">
		                   <ShoppingCart />
		                </Badge>
		           </IconButton>
		        </div> )}
		     </Toolbar>
		  </AppBar>
		</>
	)
}

export default Navbar;