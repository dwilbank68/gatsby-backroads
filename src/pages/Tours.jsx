import React, { Component } from 'react';
import Layout from "../components/Layout.jsx";
import Example from "../examples/example2.jsx";
import {graphql} from 'gatsby';
import StyledHero from '../components/StyledHero.jsx';

class Tours extends Component {

    render() {
        const img = this.props.data.defaultBcg.childImageSharp.fluid;
        return (
            <Layout    className="">
                <StyledHero img={img}/>
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
