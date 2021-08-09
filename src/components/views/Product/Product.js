import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getSingleProduct, fetchSingleProduct } from '../../../redux/productsRedux';

import styles from './Product.module.scss';

import { ProductDetails } from '../../features/ProductDetails/ProductDetails';
import { NotFound } from '../NotFound/NotFound';

const Component = ({ className, _id, title, author, cover, price, description, photos, fetchSingleProduct, ...props }) => {

  useEffect(() => {
    async function fetchData() {
      await fetchSingleProduct(props.match.params.id);
    }
    fetchData();
  }, [fetchSingleProduct, props.match.params.id]);

  return (
    <div className={clsx(className, styles.root)}>
      {
        _id === props.match.params.id
          ?
          <ProductDetails
            _id={_id}
            title={title}
            author={author}
            cover={cover}
            price={price}
            description={description}
            photos={photos}
          />
          :
          <NotFound />
      }
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  _id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  photos: PropTypes.array,
  fetchSingleProduct: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  const product = getSingleProduct(state, props.match.params.id);
  return {...product};
};

const mapDispatchToProps = dispatch => ({
  fetchSingleProduct: id => dispatch(fetchSingleProduct(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
