import React from 'react';
import Layout from "../components/Layout.jsx";
import { Link } from "gatsby";
import {graphql} from 'gatsby';
import StyledHero from '../components/StyledHero.jsx';
// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';


// import Blog from './Blog.jsx';
// const Blog = (props) => {
const Blog = ({data}) => {

    const img = data.blogBcg.childImageSharp.fluid;

    return (
        <Layout    className="blog">
            <StyledHero img={img}/>
        </Layout>
    );
};

export const query = graphql`
    query {
      blogBcg:file(relativePath:{eq:"blogBcg.jpeg"}) {
        childImageSharp{
            fluid(maxWidth:4160, quality:90) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
`

export default Blog;
