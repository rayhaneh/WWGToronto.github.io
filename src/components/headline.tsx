import * as React from 'react';

export interface HeadlineProps {
  mainText: string;
  supportingText: string;
}

export const Headline = (
  props: HeadlineProps,
): JSX.Element => {
  const {
    mainText,
    supportingText,
  } = props;

  return (
    <div className={'flex flex-column items-center justify-center cover pa5'}>
      <h1 className={'near-black f1 fw1'}>
        {mainText}
      </h1>
      <h3 className={'near-black f4 fw1'}>
        {supportingText}
      </h3>
    </div>
  );
}