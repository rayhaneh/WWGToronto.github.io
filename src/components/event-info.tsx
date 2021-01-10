import * as React from 'react';

export interface EventInfoProps {
  day: number,
  month: string,
  year: number,
  title: string;
  content: string;
  signUpLink: string;
}

const maxLength = 400

export const EventInfo = (
  props: EventInfoProps,
): JSX.Element => {
  const trimmedContent = props.content.length > maxLength ?
    props.content.substring(0, maxLength - 3) + '... ' :
    props.content;

  return (
    <div className={'flex flex-column flex-row-m flex-row-l justify-center pa3 mt4'}>
      <div className={'flex flex-column justify-center w-100 w-30-m w-20-l white bg-gopher-blue tc'}>
        <h1 className={'f-subheadline'}>{props.day}</h1>
        <p className={'ttu b lh-solid truncate h-25'}>{props.month} {props.year}</p>
      </div>
      <div className={'flex flex-column pa4 w-100 w-70-m w-80-l bg-white'}>
        <h1 className={'ttu b f4 v-mid fw4'}>{props.title}</h1>
        <div className={'lh-copy'}>
          <span>{trimmedContent}</span>
          <a href={props.signUpLink} className={'link gray dim i'}>sign up</a>
        </div>
      </div>
    </div>
  );
}
