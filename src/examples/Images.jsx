import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import img from '../images/connectBcg.jpeg';
import Img from 'gatsby-image';

const getImages = graphql`
    {
        fixed:file(relativePath:{eq:"defaultBcg.jpeg"}) {
           childImageSharp {
            fixed(width:150, height:150, grayscale: true) {
                ...GatsbyImageSharpFixed
            }
          }
        }
        fluid:file(relativePath:{eq:"blogBcg.jpeg"}) {
           childImageSharp {
            fluid (maxWidth:100){                        
                ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
    }
`
// fluid maxWidth argument (above) is 800 by default. Gatsby will generate
// images smaller and larger, AROUND the maxWidth you choose.
// fluid Img (below) takes the width of it container, despite any max-width
// you might set in your query

const Wrapper = styled.div`
    text-align: center;
    text-transform: capitalize;
    width: 80vw;
    margin: 0 auto 10rem auto;
    article {
        border: 3px solid red;
        padding: 1rem 0;
    }
    .basic { width: 100%;}
    @media (min-width:992px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 1rem;
    }
`

const Images = ({whatever1, whatever2}) => {

    const data = useStaticQuery(getImages)
    console.log('------------------------------------------');
    console.log('data ',data);
    console.log('------------------------------------------');
    
    return (
        <Wrapper>

            <article>
                <h3>Basic Image</h3>
                <img src={img} className="basic"/>
            </article>

            <article>
                <h3>fixed image/blur</h3>
                <Img fixed={data.fixed.childImageSharp.fixed}/>
            </article>

            <article>
                <h3>fluid img/svg</h3>
                <Img fluid={data.fluid.childImageSharp.fluid}/>
            </article>

        </Wrapper>
    );
};


// Images.defaultProps = {};
// Images.propTypes = {
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

export default Images;


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