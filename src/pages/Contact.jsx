import React from 'react';
import Layout from "../components/Layout.jsx";

// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';


// import Contact from './Contact.jsx';
// const Contact = (props) => {
const Contact = ({whatever1, whatever2}) => {
    // no lifecycle methods
    // no refs

    const methodName = (e) => {
        //
    }

    return (
        <Layout    className="contact">
            <a onClick={methodName}>Click</a>
            Contact
        </Layout>
    );
};


// Contact.defaultProps = {};
// Contact.propTypes = {
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

export default Contact;


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