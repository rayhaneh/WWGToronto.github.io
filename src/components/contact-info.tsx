import * as React from 'react';
import { motion } from 'framer-motion';

export interface ContactInfoProps {
  icon: string;
  title: string;
  content: string;
  url: string;
}

export const ContactInfo = (props: ContactInfoProps): JSX.Element => {
  return (
    <div className={'flex flex-column ma4'}>
      <div>
        <motion.div
          className={`fa fa-${props.icon} fa-2x v-mid`}
          aria-hidden='true'
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
        />
        <a href={props.url} className={'f3 v-mid pl2 tu'}>
          {props.title}
        </a>
      </div>
      <p className={'lh-copy'}> {props.content} </p>
    </div>
  );
};
