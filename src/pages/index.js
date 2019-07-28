import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from "../components/Layout.jsx"
import Banner from '../components/Banner.jsx';
import About from '../components/home/About.jsx';
import Services from '../components/home/Services.jsx';
import {graphql} from 'gatsby';
import StyledHero from '../components/StyledHero.jsx';

export default ({data}) => (

    <Layout>
        <StyledHero home="true"
                    img={data.defaultBcg.childImageSharp.fluid}>
            <Banner title="continue exploring"
                    info="Lorem ipsum dolor sit amet, poribus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!">
                <AniLink fade to='/Tours'
                        className="btn-white">
                    Explore Tours
                </AniLink>
            </Banner>
        </StyledHero>

        <About/>
        <Services/>
    </Layout>
);

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
