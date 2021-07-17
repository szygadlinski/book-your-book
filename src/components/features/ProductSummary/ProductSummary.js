import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Link, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import styles from './ProductSummary.module.scss';

const Component = ({ className, _id, title, author, cover, price }) => (
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
            <Typography variant="subtitle2">
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

export {
  Component as ProductSummary,
  Component as ProductSummaryComponent,
};
