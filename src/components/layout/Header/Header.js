import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from './Header.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar>
      <Toolbar className={styles.toolbar}>
        <Link href='/' className={styles.logo}>
          <MenuBookIcon className={styles.icon} />
          <Typography variant="h2" className={styles.title}>
            Book Your Book!
          </Typography>
          <MenuBookIcon className={styles.icon} />
        </Link>

        <Button
          className={styles.cart}
          variant='contained'
          component={NavLink}
          to='/cart'
          startIcon={<ShoppingCartIcon className={styles.icon} />}
        >
          <Typography variant="h5">
            Cart
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>

    <Toolbar className={styles.toolbar}>
      <Typography variant="h2" className={clsx(styles.title, styles.hidden)}>.</Typography>
    </Toolbar>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  //Container as Header,
  Component as HeaderComponent,
};
