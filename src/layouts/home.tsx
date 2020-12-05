import * as React from 'react';

import {
  Header,
  Headline,
} from '../components';


export class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={'pt5'}>
        <Header />
        <div className={'pt5 bg-moon-gray'}>
          <Headline
            mainText={'Women Who Go Toronto'}
            supportingText={'A community of women and non-binary Go developers'}
          />
        </div>
        <div className={'flex flex-column items-center ma4'}>
          <h1 className={'ttu gray'}>About Us</h1>
          <p className={'lh-copy w-80'}>Women Who Go Toronto is a community of women and non-binary Go (Golang) developers committed to learning and sharing intermediate and advanced Go programming topics in an open and inclusive environment.</p>
        </div>
      </div>
    );
  }
}