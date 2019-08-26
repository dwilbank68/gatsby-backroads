import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout.jsx';
import StyledHero from '../components/StyledHero.jsx';
import styles from '../css/template.module.css';
import Img from 'gatsby-image';
import {FaMoneyBillWave, FaMap} from 'react-icons/fa';
import Day from '../components/SingleTour/Day.jsx';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const TourTemplate = ({data}) => {

    const {name, price, country, days,
        description:{description},
        images, start, journey} = data.tour;
    
    const [mainImage, ...tourImages] = images;
    
    return (
        <Layout>
            <StyledHero img={mainImage.fluid}/>
            <section className={styles.template}>
                <div className={styles.center}>

                    <div className={styles.images}>
                        {tourImages.map((item,i) => (
                            <Img    key={i} fluid={item.fluid}
                                    alt="single tour"
                                    className={styles.image}/>
                        ))}
                    </div>

                    <h2>{name}</h2>
                    <div className={styles.info}>
                        <p>
                            <FaMoneyBillWave className={styles.icon}/>
                            starting from ${price}
                        </p>
                        <p>
                            <FaMap className={styles.icon}/>
                            {country}
                        </p>
                    </div>
                    <h4>start on: {start}</h4>
                    <h4>duration: {days} days</h4>
                    <p className={styles.desc}>
                        {description}
                    </p>
                    <h2>daily schedule</h2>
                    <div className={styles.journey}>
                        {journey.map((item, i) => (
                            <Day key={i} day={item.day} info={item.info}/>
                        ))}
                    </div>

                    <AniLink    fade to='/Tours'
                                className='btn-primary'>
                        back to tours
                    </AniLink>

                </div>
            </section>
        </Layout>
    );
};

// $slug comes via the context from gatsby-node.js
// context: {
//     slug: node.slug,
// }
export const query = graphql`
query($slug:String!) {
    tour:contentfulTour(slug:{eq:$slug}) {
        name price country days
        start(formatString:"YYYY MMMM Do dddd")
        description {description}
        journey {
           day info
        }
        images {
          	fluid {
              	...GatsbyContentfulFluid
            }
        }
    }
}
`


export default TourTemplate;


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