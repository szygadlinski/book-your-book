import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { Table, TableBody, TableRow, TableCell, FormControl, OutlinedInput, TextField } from '@material-ui/core';
import styles from './CartProduct.module.scss';

const Component = ({className, title, cover, price, amount}) => {

  const [newAmount, setNewAmount] = useState(amount);
  const changeAmount = event => {
    setNewAmount(event.target.value);
  };

  const [comment, setComment] = useState('');
  const changeComment = event => {
    setComment(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Table className={styles.table}>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className={styles.photoWrapper}>
                <img src={cover} alt={title} className={styles.photo} />
              </div>
            </TableCell>

            <TableCell>
              <div className={styles.title}>
                {title}
              </div>
            </TableCell>

            <TableCell className={styles.price} align="right">
              {price}$
            </TableCell>

            <TableCell align="right">
              <FormControl>
                <OutlinedInput
                  type='number'
                  className={styles.amount}
                  required
                  value={newAmount}
                  onChange={changeAmount}
                  inputProps={{
                    min: 1,
                    max: 50,
                  }}
                >
                </OutlinedInput>
              </FormControl>
            </TableCell>

            <TableCell align="right">
              <TextField
                label="Optional comment"
                variant="outlined"
                multiline
                className={styles.comment}
                value={comment}
                onChange={changeComment}
              />
            </TableCell>

            <TableCell align="right">{amount}</TableCell>
            <TableCell align="right">{amount}</TableCell>
            <TableCell align="right">{amount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartProduct,
  //Container as CartProduct,
  Component as CartProductComponent,
};
