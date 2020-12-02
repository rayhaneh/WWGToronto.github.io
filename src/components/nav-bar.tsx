import * as React from 'react';

import { NavItem } from '.';

import { routes } from '../routes';

export interface NavBarProps {
  menuDirection: 'column' | 'row';
}

export const NavBar = (
  props: NavBarProps,
): JSX.Element => {

  const items = routes.map((route, index) =>
    <NavItem
      key={index}
      text={route.text}
      route={route.path}
    />
  );

  return (
    <nav className={`flex flex-${props.menuDirection} ma0 ph4`}>
      {items}
    </nav>
  )
}
