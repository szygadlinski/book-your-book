import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProductsFromCart, removeFromCart } from '../../../redux/cartRedux';
import { addToOrders } from '../../../redux/ordersRedux';

import { Button, Typography, FormControl, OutlinedInput } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShopIcon from '@material-ui/icons/Shop';
import styles from './Order.module.scss';

import { OrderProduct } from '../../features/OrderProduct/OrderProduct';
import { calculateTotalPrice } from '../../../utils/calculateTotalPrice';

const Component = ({ className, orderedProducts, addToOrders, removeFromCart }) => {

  const [order, setOrder] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    code: '',
    city: '',
    country: '',
    products: orderedProducts,
  });

  const changeOrder = event => {
    setOrder({
      ...order,
      [event.target.name]: event.target.value,
    });
  };

  const history = useHistory();

  const saveOrder = event => {
    event.preventDefault();

    addToOrders(order);

    for(let product of orderedProducts) {
      removeFromCart(product._id);
    }

    history.push('/');
  };

  return (
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

              <form className={styles.confirmOrder} onSubmit={saveOrder}>
                <FormControl>
                  <OutlinedInput
                    variant='outlined'
                    name='name'
                    required
                    className={styles.input}
                    placeholder='Your name'
                    value={order.name}
                    onChange={changeOrder}
                    inputProps={{
                      minLength: 5,
                      maxLength: 50,
                    }}
                  />
                </FormControl>

                <FormControl>
                  <OutlinedInput
                    variant='outlined'
                    name='email'
                    required
                    type='email'
                    className={styles.input}
                    placeholder='Your email'
                    value={order.email}
                    onChange={changeOrder}
                    inputProps={{
                      minLength: 6,
                      maxLength: 100,
                    }}
                  />
                </FormControl>

                <FormControl>
                  <OutlinedInput
                    variant='outlined'
                    name='phone'
                    required
                    type='tel'
                    className={clsx(styles.input, styles.phone)}
                    placeholder='Your phone'
                    value={order.phone}
                    onChange={changeOrder}
                    inputProps={{
                      minLength: 9,
                      maxLength: 18,
                    }}
                  />
                </FormControl>

                <FormControl>
                  <OutlinedInput
                    variant='outlined'
                    name='street'
                    required
                    className={styles.input}
                    placeholder='Street'
                    value={order.street}
                    onChange={changeOrder}
                    inputProps={{
                      minLength: 3,
                      maxLength: 50,
                    }}
                  />
                </FormControl>

                <FormControl>
                  <OutlinedInput
                    variant='outlined'
                    name='code'
                    required
                    className={styles.input}
                    placeholder='Postal code'
                    value={order.code}
                    onChange={changeOrder}
                    inputProps={{
                      minLength: 5,
                      maxLength: 6,
                    }}
                  />
                </FormControl>

                <FormControl>
                  <OutlinedInput
                    variant='outlined'
                    name='city'
                    required
                    className={styles.input}
                    placeholder='City'
                    value={order.city}
                    onChange={changeOrder}
                    inputProps={{
                      minLength: 3,
                      maxLength: 50,
                    }}
                  />
                </FormControl>

                <FormControl>
                  <OutlinedInput
                    variant='outlined'
                    name='country'
                    required
                    className={styles.input}
                    placeholder='Country'
                    value={order.country}
                    onChange={changeOrder}
                    inputProps={{
                      minLength: 3,
                      maxLength: 50,
                    }}
                  />
                </FormControl>

                <Button
                  type='submit'
                  className={styles.orderButton}
                  variant='contained'
                  startIcon={<ShopIcon className={styles.icon} />}
                >
                  <Typography variant="h5">
                    Save order
                  </Typography>
                </Button>
              </form>
            </div>
          </div>
      }
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  orderedProducts: PropTypes.array,
  addToOrders: PropTypes.func,
  removeFromCart: PropTypes.func,
};

const mapStateToProps = state => ({
  orderedProducts: getProductsFromCart(state),
});

const mapDispatchToProps = dispatch => ({
  addToOrders: order => dispatch(addToOrders(order)),
  removeFromCart: id => dispatch(removeFromCart(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Order,
  Component as OrderComponent,
};
