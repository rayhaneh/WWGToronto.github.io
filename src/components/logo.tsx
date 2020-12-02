import * as React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/image0.png'


export const Logo = (): JSX.Element => {
  return (
    <Link
      to={'/'}
      className={'pv2'}>
      <img
        className={'ma0 ml3 v-mid h3'}
        src={logo}
        alt={logo}
      />
    </Link>
  )
};