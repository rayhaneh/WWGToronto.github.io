import * as React from 'react';

import {
  Header,
} from '../components';


export class Events extends React.Component {
  public render() {
    return (
      <div className={'pt5'}>
        <Header />
        <h3 className={'gray ma4 pa2'}>For a list of event refer to meetup</h3>
      </div>
    );
  }
}