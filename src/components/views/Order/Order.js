import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProductsFromCart } from '../../../redux/cartRedux';

import { Button, Typography } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styles from './Order.module.scss';

import { OrderProduct } from '../../features/OrderProduct/OrderProduct';
import { OrderForm } from '../../features/OrderForm/OrderForm';
import { calculateTotalPrice } from '../../../utils/calculateTotalPrice';

const Component = ({ className, orderedProducts }) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={styles.title}>
      <MenuBookIcon className={styles.icon} />
          Order Summary
      <MenuBookIcon className={styles.icon} />
    </h2>

    {
      orderedProducts.length === 0
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
        <div className={styles.notEmptyOrder}>
          <div className={styles.orderedProducts}>
            <Typography variant="h5" className={styles.sectionTitle}>
                Ordered products:
            </Typography>

            {orderedProducts.map(product => (
              <OrderProduct key={product._id} {...product} />
            ))}

            <h5 className={styles.price}>
              {`Total price: ${calculateTotalPrice(orderedProducts)}$`}
            </h5>
          </div>

          <div className={styles.shippingData}>
            <Typography variant="h5" className={styles.sectionTitle}>
                Shipping data:
            </Typography>

            <OrderForm />
          </div>
        </div>
    }
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  orderedProducts: PropTypes.array,
};

const mapStateToProps = state => ({
  orderedProducts: getProductsFromCart(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Order,
  Component as OrderComponent,
};
