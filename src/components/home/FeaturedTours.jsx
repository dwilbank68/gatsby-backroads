import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Tour from '../tours/Tour.jsx';
import {useStaticQuery, graphql} from 'gatsby';
import Title from '../Title.jsx';
import styles from '../../css/items.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
// import FeaturedTours from './FeaturedTours.jsx';

const getTours = graphql`
    query {
        featuredTours:allContentfulTour(filter: {featured: {eq:true}}){
            edges {
                node {
                    name price slug country contentful_id
                    days
                    images {
                        fluid {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

const FeaturedTours = () => {

    const response = useStaticQuery(getTours);
    const tours = response.featuredTours.edges;
    
    return (
        <section    className={styles.tours}>
            <Title titleLeft="featured" titleRight="tours"/>
            <div className={styles.center}>
                {tours.map(({node}) => (
                    <Tour   key={node.contentful_id}
                            tour={node}/>
                ))}
            </div>
            <AniLink    fade to="/Tours"
                        className="btn-primary">
                all tours
            </AniLink>
        </section>
    );

}

// FeaturedTours.defaultProps = {};
// FeaturedTours.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// FeaturedTours.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default FeaturedTours;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')

// }

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
