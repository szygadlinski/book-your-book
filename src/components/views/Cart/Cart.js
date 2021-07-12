import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProductsFromCart } from '../../../redux/cartRedux';

import { Button, Typography } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import styles from './Cart.module.scss';

import { CartProduct } from '../../features/CartProduct/CartProduct';

const Component = ({className, cartProducts}) => {

  const calculateTotalPrice = cartProducts => {
    let totalPrice = 0;

    for(let product of cartProducts){
      totalPrice += product.price * product.amount;
    }

    return totalPrice;
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>
        <MenuBookIcon className={styles.icon} />
      Your cart
        <MenuBookIcon className={styles.icon} />
      </h2>
      {
        cartProducts.length === 0
          ?
          <div className={styles.emptyCart}>
            <h3>You did not add anything to cart yet :)</h3>
            <Button
              className={styles.back}
              variant='contained'
              component={NavLink}
              to='/'
              startIcon={<ArrowBackIcon className={styles.icon} />}
            >
              <Typography variant="h5">
                Let&apos;s do some shopping!
              </Typography>
            </Button>
          </div>
          :
          <div>
            {cartProducts.map(product => (
              <CartProduct key={product._id} {...product} />
            ))}

            <div className={styles.confirmOrder}>
              <h5 className={styles.price}>
                {`Total price: ${calculateTotalPrice(cartProducts)}$`}
              </h5>

              <Button
                className={styles.orderButton}
                variant='contained'
                component={NavLink}
                to='/order'
                startIcon={<ShoppingBasketIcon className={styles.icon} />}
              >
                <Typography variant="h5">
                Confirm order
                </Typography>
              </Button>
            </div>
          </div>
      }
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cartProducts: PropTypes.array,
};

const mapStateToProps = state => ({
  cartProducts: getProductsFromCart(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
