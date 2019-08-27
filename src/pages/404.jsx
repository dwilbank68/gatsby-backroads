import React from 'react';
import Layout from "../components/Layout.jsx";
import styles from '../css/error.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Banner from '../components/Banner.jsx';
import SEO from '../components/SEO.jsx';

const Error = ({children}) => {

    return (
        <Layout    className="Error">
            <SEO title="Error"/>
            <header className={styles.error}>
                <Banner title="oops it's a dead end">
                    <AniLink fade to="/" className="btn-white">
                        Back to home page
                    </AniLink>
                </Banner>
            </header>
        </Layout>
    );
};


// Error.defaultProps = {};
// Error.propTypes = {
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

export default Error;


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