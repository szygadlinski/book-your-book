import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProductsFromCart } from '../../../redux/cartRedux';

import { Button, Typography } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShopIcon from '@material-ui/icons/Shop';
import styles from './Order.module.scss';

import { OrderProduct } from '../../features/OrderProduct/OrderProduct';

const Component = ({className, orderProducts}) => {

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
        Order Summary
        <MenuBookIcon className={styles.icon} />
      </h2>

      {
        orderProducts.length === 0
          ?
          <div className={styles.emptyOrder}>
            <h3>You did not order anything yet :)</h3>
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
            {orderProducts.map(product => (
              <OrderProduct key={product._id} {...product} />
            ))}
            <h5 className={styles.price}>
              {`Total price: ${calculateTotalPrice(orderProducts)}$`}
            </h5>
          </div>
      }

      <div className={styles.confirmOrder}>

        <Button
          className={styles.orderButton}
          variant='contained'
          component={NavLink}
          to='/'
          startIcon={<ShopIcon className={styles.icon} />}
        >
          <Typography variant="h5">
          Order
          </Typography>
        </Button>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  orderProducts: PropTypes.array,
};

const mapStateToProps = state => ({
  orderProducts: getProductsFromCart(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Order,
  Container as Order,
  Component as OrderComponent,
};
