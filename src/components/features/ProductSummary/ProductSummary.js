import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import styles from './ProductSummary.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>ProductSummary</h2>
    {children}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductSummary,
  //Container as ProductSummary,
  Component as ProductSummaryComponent,
};