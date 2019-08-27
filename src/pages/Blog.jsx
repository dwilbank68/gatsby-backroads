import React from 'react';
import Layout from "../components/Layout.jsx";
import { Link } from "gatsby";
import {graphql} from 'gatsby';
import StyledHero from '../components/StyledHero.jsx';
import BlogList from '../components/blog/BlogList.jsx';
import SEO from '../components/SEO.jsx';


const Blog = ({data}) => {

    const img = data.blogBcg.childImageSharp.fluid;

    return (
        <Layout    className="blog">
            <SEO title="Blog"/>
            <StyledHero img={img}/>
            <BlogList/>
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
