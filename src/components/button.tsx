import * as React from 'react';

export interface ButtonProps {
  text: string;
  url: string;
}

export const Button = (
  props: ButtonProps,
): JSX.Element => {
  const {
    text,
    url
  } = props;

  return (
    <div className={'pt3'}>
      <a
        className={'no-underline ba ph4 bw1 pv2 br1 gold ttu dim'}
        href={url}
      >
        {text}
      </a>
    </div>
  );
}