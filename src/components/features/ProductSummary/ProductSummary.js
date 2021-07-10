import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { Link, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import styles from './ProductSummary.module.scss';

const Component = ({className, _id, title, author, cover, price}) => (
  <div className={clsx(className, styles.root)}>
    <Link href={`/product/${_id}`}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="250"
            image={cover}
            title={title}
          />
          <CardContent>
            <Typography variant="h5">
              {title}
            </Typography>
            <Typography variant="p" >
              {author}
            </Typography>
            <Typography variant="h6" >
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
