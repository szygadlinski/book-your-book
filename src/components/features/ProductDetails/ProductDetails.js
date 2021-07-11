import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import styles from './ProductDetails.module.scss';

const Component = ({className, title, author, cover, price, description, photos}) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={styles.title}>
      <MenuBookIcon className={styles.icon} />
      {title}
      <MenuBookIcon className={styles.icon} />
    </h2>

    <h3 className={styles.author}>
      {author}
    </h3>

    <div className={styles.coverWrapper}>
      <img src={cover} alt={title} className={styles.cover} />
    </div>

    <h1 className={styles.price}>
      {price}$
    </h1>

    <p className={styles.description}>
      {description}
    </p>

    {photos.map(photo => (
      <div key={photos.indexOf(photo)} className={styles.photoWrapper}>
        <img src={photo} alt={title} className={styles.photo} />
      </div>
    ))}
  </div>
);

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
