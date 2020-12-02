import * as React from 'react';

import { NavLink } from 'react-router-dom';

export interface NavItemProps {
  text: string;
  route: string;
}

export const NavItem = (
  props: NavItemProps,
): JSX.Element => {
  const {
    text,
    route,
  } = props;

  return (
    <NavLink
      to={route}
      className={'link white dim f6 f5-ns dib mr3 ttu pv3 pv-2-m pv2-l tc'}
      activeClassName={'bb'}
      exact={true}
    >
      {text}
    </NavLink>
  );
}
