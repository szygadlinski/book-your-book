import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';

import styles from './Homepage.module.scss';

const Component = ({className, products}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Homepage</h2>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
