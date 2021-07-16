import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProductsFromCart } from '../../../redux/cartRedux';

import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from './Header.module.scss';

const Component = ({className, cartProducts}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar>
      <Toolbar className={styles.toolbar}>
        <Link href='/' className={styles.logo}>
          <MenuBookIcon className={styles.icon} />
          <Typography variant="h1" className={styles.title}>
            Book Your Book!
          </Typography>
          <MenuBookIcon className={styles.icon} />
        </Link>

        <Button
          className={styles.cart}
          variant='contained'
          component={NavLink}
          to='/cart'
          startIcon={<ShoppingCartIcon className={styles.icon} />}
        >
          <Typography variant="h5">
            Cart [{cartProducts.length}]
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>

    <Toolbar className={styles.toolbar}>
      <Typography variant="h1" className={clsx(styles.title, styles.hidden)}>.</Typography>
    </Toolbar>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  cartProducts: PropTypes.array,
};

const mapStateToProps = state => ({
  cartProducts: getProductsFromCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
