import React, { Component } from 'react';
import Layout from "../components/Layout.jsx";
import Example from "../examples/example2.jsx";
import {graphql} from 'gatsby';
import StyledHero from '../components/StyledHero.jsx';
import ToursComponent from '../components/tours/Tours.jsx';
import SEO from '../components/SEO.jsx';


class Tours extends Component {

    render() {
        const img = this.props.data.defaultBcg.childImageSharp.fluid;
        return (
            <Layout    className="">
                <SEO title="Tours"/>
                <StyledHero img={img}/>
                <ToursComponent/>
            </Layout>
        );
    }
}

export const query = graphql`
    query {
      defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}) {
        childImageSharp{
            fluid(maxWidth:4160, quality:90) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
`

export default Tours;
