import React from 'react';
// import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';
import styles from '../../css/blog-card.module.css';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// import Blog from './Blog.jsx';
// const Blog = (props) => {
const BlogCard = ({blog}) => {

    const {slug, title, image, published} = blog;

    const methodName = (e) => {
        //
    }

    return (
        <article className={styles.blog}>
            <div className={styles.imgContainer}>
                <Image  fluid={image.fluid} className={styles.img}
                        alt="single post"/>
                <AniLink    fade className={styles.link}
                            to={`/blog/${slug}`}>
                    read more
                </AniLink>

                <h6 className={styles.date}>
                    {published}
                </h6>
            </div>
            <div className={styles.footer}>
                <h4>{title}</h4>
            </div>
        </article>
    );
};


// Blog.defaultProps = {};
// Blog.propTypes = {
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

export default BlogCard;


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