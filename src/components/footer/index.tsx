import * as React from 'react';
import { Icon } from './icon';

export const Footer = (): JSX.Element => {
    return (
        <footer className="pv4 ph3 ph5-ns tc">
            <div className={'flex flex-column ma4'}>
                <div>
                    <Icon icon={'meetup'} url={'https://www.meetup.com/women-who-go-toronto'}></Icon>
                    <Icon icon={'twitter'} url={'https://twitter.com/wwgtoronto'}></Icon>
                    <Icon icon={'envelope'} url={'mailto:toronto@womenwhogo.org'}></Icon>
                    <Icon icon={'slack'} url={'https://womenwhogo.slack.com'}></Icon>
                    <Icon icon={'github'} url={'https://github.com/WWGToronto'}></Icon>
                </div>
            </div>
            <div className="mt4">
                <a href="/" className="f6 link dim gray dib mr3 mr4-ns">Home</a>
                <a href="/events" className="f6 link dim gray dib mr3 mr4-ns">Events</a>
                <a href="#" className="f6 link dim gray dib">Code of Conduct</a>
            </div>
        </footer>
    )
}
