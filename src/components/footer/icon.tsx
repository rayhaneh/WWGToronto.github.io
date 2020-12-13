import * as React from 'react';
import { motion } from 'framer-motion';

export interface ContactInfoProps {
    icon: string;
    url: string;
}

export const Icon = (props: ContactInfoProps): JSX.Element => {
    return (
        <a href={props.url} className={'link dim black dib h2 w2 br-100 mr3'}>
            <motion.div
                className={`fa fa-${props.icon} fa-2x v-mid`}
                aria-hidden='true'
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
            />
        </a>
    )
}