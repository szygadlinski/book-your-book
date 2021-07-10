import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { Link, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import styles from './ProductSummary.module.scss';

const Component = ({className, _id, title, author, cover, price}) => (
  <div className={clsx(className, styles.root)}>
    <Link href={`/product/${_id}`} className={styles.product}>
      <Card className={styles.card}>
        <CardActionArea className={styles.actionArea}>
          <CardMedia
            className={styles.cover}
            component="img"
            alt={title}
            image={cover}
            title={title}
          />
          <CardContent className={styles.info}>
            <Typography variant="h5" className={styles.title}>
              {title}
            </Typography>
            <Typography variant="p">
              {author}
            </Typography>
            <Typography variant="h5" className={styles.price}>
              {price}$
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  </div>
);

Component.propTypes = {
  _id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
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
