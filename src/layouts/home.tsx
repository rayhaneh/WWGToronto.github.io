import * as React from 'react';

import {
  Header,
  Headline,
  Footer
} from '../components';

import wwgtogopher from '../assets/images/WWG3.jpg'

export class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={'pt5'}>
        <Header />
        <div className={'pt5 bg-gopher-blue near-black'}>
          <Headline
            mainText={'Women Who Go Toronto'}
            supportingText={'A community of women and non-binary Go developers'}
          />
        </div>
        <div className={'flex flex-column items-center pv5 ph3 ph5-m ph6-l'}>
          <div className={'flex flex-column flex-column-m flex-row-l'}>
            <div className={'w-100 w-70-l'}>
              <h1 className={'ttu gray'}>About Us</h1>
              <p className={'lh-copy'}>Women Who Go Toronto is a community of women and non-binary Go (Golang) developers committed to learning and sharing intermediate and advanced Go programming topics in an open and inclusive environment.</p>
              <p className={'lh-copy'}>Our gopher friend, Meg, is designed by <a href={'https://www.instagram.com/ellenpix'} className={'link gray dim'}>Ellen Hsiang</a>. The inspiration behind this mascot comes from the well-known photo of software pioneer Margaret Hamilton standing next to her team's tower of code for the Apollo Project. She was a champion of computer programming as a legitimate discipline, and is credited with coining the term software engineering.</p>
            </div>
            <div className={'w-100 w-30-l'}>
              <img
                className={'w-100'}
                src={wwgtogopher}
                alt={'Meg, WWG Toronto Gopher'}
              />
            </div>
          </div>
          <div className={''}>
            <p className={'lh-copy'}>Behind Meg is the distinctive Toronto City Hall. In contrast to that other famous but pointier Toronto landmark, City Hall is a curvy harmony of parts. Two towers wrap around the saucer-like council chamber, hinting at standing figures gathering for an intimate chat. It is also the literal meeting place for City Council. Both the building and the meetings are open to the public.</p>
            <p className={'lh-copy'}>Passionate software engineers, gophers, and a welcoming community? What else but Women Who Go Toronto.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
