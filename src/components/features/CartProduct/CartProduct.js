import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { updateInCart, removeFromCart } from '../../../redux/cartRedux';

import { FormControl, OutlinedInput, Button, Typography } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import styles from './CartProduct.module.scss';

const Component = ({ className, _id, title, cover, price, amount, comment, updateInCart, removeFromCart }) => {

  const [newAmount, setNewAmount] = useState(amount);
  const changeAmount = event => {
    setNewAmount(parseInt(event.target.value));
  };

  const [newComment, setNewComment] = useState(comment);
  const changeComment = event => {
    setNewComment(event.target.value);
  };

  const updateProduct = () => {
    updateInCart({
      id: _id,
      amount: newAmount,
      comment: newComment,
    });
  };

  const removeProduct = () => {
    removeFromCart(_id);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <div className={styles.photoWrapper}>
            <img src={cover} alt={title} className={styles.photo} />
          </div>
        </div>

        <div className={clsx(styles.cell, styles.titleWrapper)}>
          <div className={styles.title}>
            {title}
          </div>
        </div>

        <div className={styles.edit}>
          <div className={styles.cell}>
            <div className={styles.price}>
              {price}$
            </div>
          </div>

          <div className={styles.cell}>
            <FormControl>
              <OutlinedInput
                type='number'
                className={styles.amount}
                required
                value={newAmount}
                onChange={changeAmount}
                inputProps={{
                  min: 1,
                  max: 50,
                }}
              >
              </OutlinedInput>
            </FormControl>
          </div>

          <div className={styles.cell}>
            <FormControl>
              <OutlinedInput
                variant="outlined"
                multiline
                className={styles.comment}
                placeholder="Optional comment"
                value={newComment}
                onChange={changeComment}
                inputProps={{
                  maxLength: 500,
                }}
              >
              </OutlinedInput>
            </FormControl>
          </div>

          <div className={styles.cell}>
            <Button
              className={styles.updateButton}
              variant='contained'
              startIcon={<UpdateIcon className={styles.icon} />}
              onClick={updateProduct}
            >
              <Typography variant="button">
                Update
              </Typography>
            </Button>
          </div>

          <div className={styles.cell}>
            <Button
              className={styles.removeButton}
              variant='contained'
              startIcon={<RemoveShoppingCartIcon className={styles.icon} />}
              onClick={removeProduct}
            >
              <Typography variant="button">
                Remove
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  _id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  comment: PropTypes.string,
  updateInCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  updateInCart: ({id, amount, comment}) => dispatch(updateInCart({id, amount, comment})),
  removeFromCart: id => dispatch(removeFromCart(id)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as CartProduct,
  Component as CartProductComponent,
};
