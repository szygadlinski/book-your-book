import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAllProducts, fetchAllProducts } from '../../../redux/productsRedux';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import styles from './Homepage.module.scss';

import { ProductSummary } from '../../features/ProductSummary/ProductSummary';

const Component = ({ className, products, fetchAllProducts }) => {

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>
        <MenuBookIcon className={styles.icon} />
          Our bestsellers
        <MenuBookIcon className={styles.icon} />
      </h2>
      {products.map(product => <ProductSummary key={product._id} {...product} />)}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
  fetchAllProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
