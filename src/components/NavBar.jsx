import React, {useState} from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from "../css/navbar.module.css";
import { FaAlignRight } from "react-icons/fa";
import links from "../constants/links.js";
import socialIcons from "../constants/social-icons.js";
import logo from '../images/logo.svg'

const NavBar = ({whatever1, whatever2}) => {

    const [isOpen, setNav] = useState(false)

    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }

    const openStyle = isOpen ? styles.showNav : '';

    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>

                <div className={styles.navHeader}>
                    <img src={logo} alt="backroads logo"/>
                    <button type='button'
                            className={styles.logoBtn}
                            onClick={toggleNav}>
                        <FaAlignRight className={styles.logoIcon}/>
                    </button>
                </div>

                <ul className={`${styles.navLinks} ${openStyle}`}>
                    {links.map((l, i) => (
                        <li key={i}>
                            <AniLink fade to={l.path}>
                                {l.text}
                            </AniLink>
                        </li>
                    ))}
                </ul>

                <div className={styles.navSocialLinks}>
                    {socialIcons.map((s, i) => (
                        <a  key={i}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer">
                            {s.icon}
                        </a>

                    ))}

                </div>

            </div>
        </nav>
    );
};


// NavBar.defaultProps = {};
// NavBar.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({
//          title: PropTypes.string.isRequired,
//          text: PropTypes.string.isRequired
//     }).isRequired,
//     comments:    PropTypes.arrayOf(PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default NavBar;


///////////////////////////////////// BACKGROUND IMAGE /////////////////////////////////////

// import Foo from './images/foo.png';

// style={{background:`white url(${Foo})`}}


///////////////////////////////////// REACT-REVEAL EFFECT /////////////////////////////////////

// import Fade from 'react-reveal/Fade.js';
// import Slide from 'react-reveal/Slide.js';
// import Zoom from 'react-reveal/Zoom.js';

// <Fade delay={500}>...</Fade>
// <Slide left delay={1000}>...</Slide
// <Zoom delay={foo.delay}>...</Zoom>