import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { Button } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styles from './NotFound.module.scss';

const Component = ({ className }) => {

  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 5000);
  });

  if(!render) {
    return null;
  } else return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>
        <MenuBookIcon className={styles.icon} />
          Error 404 - there is nothing here... :(
        <MenuBookIcon className={styles.icon} />
      </h2>

      <Button
        className={styles.back}
        variant='contained'
        component={NavLink}
        to='/'
        startIcon={<ArrowBackIcon className={styles.icon} />}
      >
        Back to the main page
      </Button>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
