import * as React from 'react';

import {
  Header,
} from '../components';


export class ContactUs extends React.Component {
  public render() {
    return (
      <div className={'pt5'}>
        <Header />
        <h3 className={'gray ma4 pa2'}>Twitter + Meetup + Email + Slack</h3>
      </div>
    );
  }
}