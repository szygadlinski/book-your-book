import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Paper } from '@material-ui/core';
import styles from './MainLayout.module.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    <Container>
      <Paper elevation={5} className={styles.content}>
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

export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
