import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux';

import { Container, Paper } from '@material-ui/core';
import styles from './MainLayout.module.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    <Container>
      <Paper elevation={5}>
        {children}
      </Paper>
    </Container>
    <Footer />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MainLayout,
  //Container as MainLayout,
  Component as MainLayoutComponent,
};