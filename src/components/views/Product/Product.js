import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getSingleProduct } from '../../../redux/productsRedux';

import styles from './Product.module.scss';

import { ProductDetails } from '../../features/ProductDetails/ProductDetails';
import { NotFound } from '../NotFound/NotFound';

const Component = ({ className, _id, title, author, cover, price, description, photos, ...props }) => (
  <div className={clsx(className, styles.root)}>
    {
      _id === props.match.params.id
        ?
        <ProductDetails title author cover price description photos />
        :
        <NotFound />
    }
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  _id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  photos: PropTypes.array,
  match: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  const product = getSingleProduct(state, props.match.params.id);
  return {...product};
};

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
