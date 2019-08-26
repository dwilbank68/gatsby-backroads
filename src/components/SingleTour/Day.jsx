import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import styles from '../../css/day.module.css';
import {FaAngleDown} from 'react-icons/fa';

// import Day from './Day.jsx';
// const Day = (props) => {
const Day = ({day, info}) => {

    // no refs

    const [showInfo, setInfo] = useState(false);

    const toggleInfo = () => {
       setInfo(showInfo => !showInfo)
    }



    return (
        <article    className={styles.day}>
            <h4>
                {day}
                <button className={styles.btn}
                        onClick={toggleInfo}>
                    <FaAngleDown/>
                </button>
            </h4>
            {showInfo && <p>{info}</p>}
        </article>
    );
};


// Day.defaultProps = {};
// Day.propTypes = {
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

export default Day;


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