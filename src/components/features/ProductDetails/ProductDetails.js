import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { FormControl, OutlinedInput, Button, Typography } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styles from './ProductDetails.module.scss';

const Component = ({className, title, author, cover, price, description, photos}) => {

  const [amount, setAmount] = useState(1);
  const changeAmount = event => {
    setAmount(event.target.value);
  };

  const addToCart = () => {
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>
        <MenuBookIcon className={styles.icon} />
        {title}
        <MenuBookIcon className={styles.icon} />
      </h2>

      <h3 className={styles.author}>
        {author}
      </h3>

      <h1 className={styles.price}>
        {price}$
      </h1>

      <div className={styles.info}>
        <div className={styles.photoWrapper}>
          <img src={cover} alt={title} className={styles.photo} />
        </div>

        <div className={styles.textWrapper}>
          <p className={styles.description}>
            {description}
          </p>

          <form className={styles.addingToCart} onSubmit={addToCart}>
            <FormControl>
              <OutlinedInput
                type='number'
                className={styles.amount}
                required
                value={amount}
                onChange={changeAmount}
                inputProps={{
                  min: 1,
                  max: 50,
                }}
              >
              </OutlinedInput>
            </FormControl>

            <Button
              type='submit'
              variant='contained'
              className={styles.addingButton}
              size='large'
              startIcon={<AddShoppingCartIcon className={styles.icon} />}
            >
              <Typography variant="h5">
                Add to cart
              </Typography>
            </Button>
          </form>
        </div>
      </div>

      <div className={styles.info}>
        {photos.map(photo => (
          <div key={photos.indexOf(photo)} className={styles.photoWrapper}>
            <img src={photo} alt={title} className={styles.photo} />
          </div>
        ))}
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  photos: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductDetails,
  //Container as ProductDetails,
  Component as ProductDetailsComponent,
};
