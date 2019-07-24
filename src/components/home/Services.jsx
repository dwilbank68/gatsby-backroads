import React from 'react';
import Title from "../Title.jsx";
import styles from '../../css/services.module.css';
import services from '../../constants/services.js';

// import Services from './Services.jsx';
// const Services = (props) => {
const Services = ({whatever1, whatever2}) => {



    return (
        <section    className={styles.services}>
            <Title titleLeft="our" titleRight="services"/>
            <div className={styles.center}>
                {services.map((s,i) => (
                    <article key={i} className={styles.service}>
                        <span>{s.icon}</span>
                        <h4>{s.title}</h4>
                        <p>{s.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};


// Services.defaultProps = {};
// Services.propTypes = {
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

export default Services;


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