import * as React from 'react';


export interface SponsorProps {
  title: string;
  website: string;
  content: string;
}

export const SponsorInfo = (
  props: SponsorProps,
): JSX.Element => {
  return (
    <div className={'flex flex-column justify-between pa4 ma2'}>
      <p className={'f3 v-mid ma0 ttu'}>{props.title}</p>
      <p> {props.content} </p>
    </div>
  );
}
