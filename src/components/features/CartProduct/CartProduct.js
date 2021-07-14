import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { Table, TableBody, TableRow, TableCell, FormControl, OutlinedInput, TextField, Button, Typography } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import styles from './CartProduct.module.scss';

const Component = ({className, title, cover, price, amount, comment}) => {

  const [newAmount, setNewAmount] = useState(amount);
  const changeAmount = event => {
    setNewAmount(event.target.value);
  };

  const [newComment, setNewComment] = useState(comment);
  const changeComment = event => {
    setNewComment(event.target.value);
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
                value={newComment}
                onChange={changeComment}
                inputProps={{
                  maxLength: 500,
                }}
              />
            </TableCell>

            <TableCell align="right">
              <Button
                className={styles.updateButton}
                variant='contained'
                startIcon={<UpdateIcon className={styles.icon} />}
                //onClick={}
              >
                <Typography variant="h5">
                Update
                </Typography>
              </Button>
            </TableCell>

            <TableCell align="right">
              <Button
                className={styles.removeButton}
                variant='contained'
                startIcon={<RemoveShoppingCartIcon className={styles.icon} />}
                //onClick={}
              >
                <Typography variant="h5">
                Remove
                </Typography>
              </Button>
            </TableCell>
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
  comment: PropTypes.string,
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
