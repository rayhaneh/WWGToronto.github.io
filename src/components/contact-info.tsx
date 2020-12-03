import * as React from 'react';


export interface ContactInfoProps {
  icon: string;
  title: string;
  content: string;
}

export const ContactInfo = (
  props: ContactInfoProps,
): JSX.Element => {
  return (
    <div className={'flex flex-column ma4'}>
      <div>
        <i className={`fa fa-${props.icon} fa-1x v-mid`} aria-hidden='true' />
        <span className={'f3 v-mid pl2 tu'}>{props.title}</span>
      </div>
      <p> {props.content} </p>
    </div>
  );
}
