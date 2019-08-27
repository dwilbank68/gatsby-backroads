import React from 'react';
import Layout from "../components/Layout.jsx";
import {graphql} from 'gatsby';
import StyledHero from '../components/StyledHero.jsx';
import Kontakt from '../components/contact/Contact.jsx';
import SEO from '../components/SEO.jsx';


const Contact = ({data}) => {

    const img = data.contactBcg.childImageSharp.fluid;

    return (
        <Layout    className="contact">
            <SEO title="Contact"/>
            <StyledHero img={img}/>
            <Kontakt/>
        </Layout>
    );
};

export const query = graphql`
    query {
      contactBcg:file(relativePath:{eq:"connectBcg.jpeg"}) {
        childImageSharp{
            fluid(maxWidth:4160, quality:90) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
`

export default Contact;

