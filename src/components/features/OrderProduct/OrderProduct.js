import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './OrderProduct.module.scss';

const Component = ({ className, title, cover, price, amount, comment }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.photoWrapper}>
      <img src={cover} alt={title} className={styles.photo} />
    </div>

    <div className={styles.info}>
      <div className={styles.title}>
        {title}
      </div>

      <div className={styles.price}>
        Price: <span>{price}$</span>
      </div>

      <div className={styles.amount}>
        Amount: <span>{amount}</span>
      </div>

      {comment.length > 0
        ?
        <div className={styles.comment}>
          Your comment: <span>{comment}</span>
        </div>
        :
        ''
      }
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  comment: PropTypes.string,
};

export {
  Component as OrderProduct,
  Component as OrderProductComponent,
};
