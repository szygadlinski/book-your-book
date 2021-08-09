import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProductsFromCart, removeFromCartsDB } from '../../../redux/cartRedux';
import { addToOrdersDB } from '../../../redux/ordersRedux';

import { Button, Typography, FormControl, OutlinedInput } from '@material-ui/core';
import ShopIcon from '@material-ui/icons/Shop';
import styles from './OrderForm.module.scss';

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

  const saveOrder = async event => {
    event.preventDefault();

    await addToOrders(order);
    removeFromCart();

    history.push('/');
    window.location.reload();
  };

  return (
    <div className={clsx(className, styles.root)}>
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
  addToOrders: order => dispatch(addToOrdersDB(order)),
  removeFromCart: () => dispatch(removeFromCartsDB()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as OrderForm,
  Component as OrderFormComponent,
};
