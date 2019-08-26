import React from 'react';
import Image from 'gatsby-image';
import styles from '../../css/tour.module.css';
import {FaMap} from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';


// import Tour from './Tour.jsx';
// const Tour = (props) => {
const Tour = ({tour}) => {
    const {country, days, images, name, price, slug} = tour;
    let mainImage = images[0].fluid;

    // const [isOpen, setOpen] = useState(false);

    // const toggleNav = () => {
    //    setOpen(isOpen => !isOpen)
    // }



    return (
        <article    className={styles.tour}>

            <div className={styles.imgContainer}>
                <Image  fluid={mainImage}
                        className={styles.img}
                        alt='single tour'/>
                <AniLink    fade className={styles.link}
                            to={`/tours/${slug}`}>
                    details
                </AniLink>
            </div>

            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.info}>
                    <h4 className={styles.country}>
                        <FaMap className={styles.icon}/>
                        {country}
                    </h4>
                    <div className={styles.details}>
                        <h6>{days} days</h6>
                        <h6>from ${price}</h6>
                    </div>
                </div>
            </div>

        </article>
    );
};


// Tour.defaultProps = {};
// Tour.propTypes = {
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

export default Tour;


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