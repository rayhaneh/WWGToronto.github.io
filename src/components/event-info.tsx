import * as React from 'react';

export interface EventInfoProps {
  day: number,
  month: string,
  year: number,
  title: string;
  content: string;
  signUpLink: string;
}

export const EventInfo = (
  props: EventInfoProps,
): JSX.Element => {
  return (
    <a href={props.signUpLink} className={'link black dim db'}>
      <div className={'flex flex-column flex-row-m flex-row-l justify-center pa3 mt4'}>
        <div className={'flex flex-column justify-center w-100 w-30-m w-20-l white bg-gold tc'}>
          <h1 className={'f-subheadline'}>{props.day}</h1>
          <p className={'ttu b'}>{props.month} {props.year}</p>
        </div>
        <div className={'flex flex-column pa4 w-100 w-70-m w-80-l bg-near-white'}>
          <h1 className={'ttu b f4 v-mid fw4'}>{props.title}</h1>
          <p className={'lh-copy'}>{props.content}</p>
        </div>
      </div>
    </a>
  );
}
