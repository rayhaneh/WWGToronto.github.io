import * as React from 'react';

import {
  Header,
  Headline,
  ContactInfo,
} from '../components';


export class ContactUs extends React.Component {
  public render() {
    return (
      <div className={'pt5 bg-gold'}>
        <Header />
        <Headline
          mainText={'We\'d love to hear from you!'}
          supportingText={'Whether you have a question or have an idea to share with us, ...'}
        />
        <div className={'flex flex-column items-center pt5'}>
          <div className={'flex flex-column flex-row-m flex-row-l justify-around items-center'}>
            <ContactInfo
              icon={'meetup'}
              title={'Meetup'}
              content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae sit repudiandae debitis est voluptates omnis harum. Ipsam nobis, qui animi a dicta nesciunt placeat, necessitatibus aut id officiis nihil.'}
            />
            <ContactInfo
              icon={'twitter'}
              title={'Twitter'}
              content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae sit repudiandae debitis est voluptates omnis harum. Ipsam nobis, qui animi a dicta nesciunt placeat, necessitatibus aut id officiis nihil.'}
            />
          </div>
          <div className={'flex flex-column flex-row-m flex-row-l justify-around items-center'}>
            <ContactInfo
              icon={'envelope'}
              title={'Email'}
              content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae sit repudiandae debitis est voluptates omnis harum. Ipsam nobis, qui animi a dicta nesciunt placeat, necessitatibus aut id officiis nihil.'}
            />
            <ContactInfo
              icon={'slack'}
              title={'Slack'}
              content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae sit repudiandae debitis est voluptates omnis harum. Ipsam nobis, qui animi a dicta nesciunt placeat, necessitatibus aut id officiis nihil.'}
            />
          </div>
        </div >
      </ div >
    );
  }
}
