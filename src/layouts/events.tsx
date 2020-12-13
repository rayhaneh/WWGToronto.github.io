import * as React from 'react';

import {
  Header,
  EventInfo,
  Footer
} from '../components';

export class Events extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <Header />
        <div className={'pt5 bg-light-gray'}>
          <div className={'flex flex-column'}>
            <h1 className={'mt5 tc fw2 mid-gray'}>Upcoming Events</h1>
            <EventInfo
              day={20}
              month={'Jan'}
              year={2020}
              title={'First Event'}
              content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae mollitia alias nesciunt accusantium optio commodi, blanditiis soluta hic ad in voluptate dolores itaque fugiat provident modi porro. Labore, totam ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae mollitia alias nesciunt accusantium optio commodi, blanditiis soluta hic ad in voluptate dolores itaque fugiat provident modi porro. Labore, totam ullam.'}
              signUpLink={'https://meetup.com/women-who-go-toronto/'}
            />
            <EventInfo
              day={18}
              month={'Feb'}
              year={2020}
              title={'Second Event'}
              content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae mollitia alias nesciunt accusantium optio commodi, blanditiis soluta hic ad in voluptate dolores itaque fugiat provident modi porro. Labore, totam ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae mollitia alias nesciunt accusantium optio commodi, blanditiis soluta hic ad in voluptate dolores itaque fugiat provident modi porro. Labore, totam ullam.'}
              signUpLink={'https://meetup.com/women-who-go-toronto/'}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}