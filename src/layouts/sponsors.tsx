import * as React from 'react';

import {
  Header,
  Headline,
  SponsorInfo,
} from '../components';


export class Sponsors extends React.Component {
  public render() {
    return (
      <div className={'pt5'}>
        <Header />
        <div className={'pt5 bg-moon-gray'}>
          <Headline
            mainText={'Thank you ...'}
            supportingText={'If you want to sponsor us ...'}
          />
        </div>
        <div>
          <div className={'flex flex-column items-center pt5'}>
            <div className={'flex flex-column flex-row-l justify-around items-center'}>
              <SponsorInfo
                title={'KOHO'}
                website={'https://www.koho.ca/'}
                content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae sit repudiandae debitis est voluptates omnis harum. Ipsam nobis, qui animi a dicta nesciunt placeat, necessitatibus aut id officiis nihil.'}
              />
              <SponsorInfo
                title={'Company x'}
                website={'https://www.koho.ca/'}
                content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae sit repudiandae debitis est voluptates omnis harum. Ipsam nobis, qui animi a dicta nesciunt placeat, necessitatibus aut id officiis nihil.'}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}