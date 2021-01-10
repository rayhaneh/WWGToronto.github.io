import * as React from 'react';

import {
  Header,
  EventInfo,
  Footer
} from '../components';

export class Events extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={'pt5'}>
        <Header />
        <div className={'pt5 bg-near-white dark-gray'}>
        <div className={'flex flex-column items-center justify-center cover pa5'}>
          <h1 className={'f1 fw1'}>Upcoming Events</h1>
          <h3 className={'f4 fw1'}>For a full list of past events please visit our <a href={'https://www.meetup.com/women-who-go-toronto/events'} className={'link gray dim'}>meetup</a> page</h3>
        </div>
        </div>
        <div className={'flex flex-column'}>
          <EventInfo
            day={20}
            month={'Jan'}
            year={2020}
            title={'Reading club: Go best practices, six years in'}
            content={"Let's start off simple with a single article for a nice introduction! The article we are going to read is 'Go best practices, six years in' by Peter Bourgon. The author, Peter Bourgon, has previously worked at SoundCloud and Weaveworks and is now a Principal Engineer at Fastly. This article was published in 2016 as an adaptation to a talk from 2014 and is included in the popular Gopher Reading List. This article goes over an array of practical topics like testing, IDEs, program design, formatting, and more. The writing isn't as prescriptive as you might initially assume it would be and presents the information more like observations and learnings."}
            signUpLink={'https://www.meetup.com/women-who-go-toronto/events/275055127'}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
