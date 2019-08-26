import React from 'react';
import {graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout.jsx';
import StyledHero from '../components/StyledHero.jsx';
import styles from '../css/single-blog.module.css';
import Img from 'gatsby-image';
import {FaMoneyBillWave, FaMap} from 'react-icons/fa';
import Day from '../components/SingleTour/Day.jsx';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const BlogTemplate = ({data}) => {

    const {title, published,
        text:{json}
    } = data.post;

    console.log('------------------------------------------');
    console.log('title ',title);
    console.log('------------------------------------------');

    // const [mainImage, ...tourImages] = images;

    const options = {
        renderNode: {
            // get graphics
            "embedded-asset-block": (node) => (
                <div className="rich">
                    <h3>this is awesome image</h3>
                    <img width="400"
                         src={node.data.target.fields.file['en-US'].url}
                         alt=""/>
                    <p>images provided by john doe</p>
                </div>
            ),
            "embedded-entry-block": (node) => {
                const {title, image, text} = node.data.target.fields;
                return (
                    <div className="rich">
                        <br/><br/><br/><br/>
                        <h1>this is other post: {title['en-US']}</h1>
                        <img width="400"
                             src={image['en-US'].fields.file['en-US'].url}
                             alt=""/>
                        {documentToReactComponents(text["en-US"])}
                        <br/><br/><br/><br/>
                    </div>
                )
            }
        }
    }

    return (
        <Layout>
           <section className={styles.blog}>
               <div className={styles.center}>
                   <h1>{title}</h1>
                   <h4>published at: {published}</h4>
                   <article className={styles.post}>
                       {documentToReactComponents(json, options)}
                   </article>
                   <AniLink fade to='/Blog' className='btn-primary'>
                       all posts
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
query getPost($slug:String!){
    post: contentfulPost(slug:{eq:$slug}) {
      	title,
      	published(formatString:"MMMM Do, YYYY"),
        text {
          	json
        }
    }
}
`
export default BlogTemplate;


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