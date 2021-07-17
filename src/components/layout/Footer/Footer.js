import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import styles from './Footer.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.icons}>
      <Link href='https://github.com/szygadlinski'>
        <GitHubIcon className={styles.icon} />
      </Link>
      <Link href='https://www.linkedin.com/in/szygadlinski/'>
        <LinkedInIcon className={styles.icon} />
      </Link>
      <Link href='mailto:szygadlinski@gmail.com'>
        <AlternateEmailIcon className={styles.icon} />
      </Link>
      <Link href='tel:+48509412305'>
        <PhoneIcon className={styles.icon} />
      </Link>
    </div>

    <Typography variant="h6" className={styles.copyright}>
      Copyright 2021 &copy; Szymon Zygadliński
    </Typography>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
