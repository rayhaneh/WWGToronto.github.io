import * as React from 'react';

import {
  Header,
  Headline,
} from '../components';


export class Home extends React.Component {
  public render() {
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
          <p className={'lh-copy w-80'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti voluptas rem, explicabo dolores commodi? Asperiores dolore repudiandae alias nesciunt quibusdam, velit possimus at facilis distinctio, amet eaque illo quia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sunt asperiores iusto saepe earum? Eos quisquam corrupti unde eius? Neque facere tempore consequatur. Quas, recusandae molestias! Dicta unde quae corrupti?</p>
        </div>
      </div>
    );
  }
}