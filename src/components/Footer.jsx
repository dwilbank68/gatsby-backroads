import React from 'react';
import styles from '../css/footer.module.css';
import links from '../constants/links.js';
import socialIcons from '../constants/social-icons';
import {Link} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';


const Footer = () => {

    return (
        <footer    className={styles.footer}>

            <div className={styles.links}>
                {links.map((l,i) => (
                    <AniLink fade key={i} to={l.path}>
                        {l.text}
                    </AniLink>
                ))}
            </div>

            <div className={styles.icons}>
                {socialIcons.map((s,i) => (
                    <a  key={i}
                        href={s.url}
                        target="_blank" rel="noopener noreferrer" >
                        {s.icon}
                    </a>
                ))}
            </div>

            <div className={styles.copyright}>
                copyright &copy; backroads travel company {new Date().getFullYear()} all rights reserved
            </div>

        </footer>
    );
};


export default Footer;