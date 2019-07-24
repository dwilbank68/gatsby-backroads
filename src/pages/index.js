import React from "react"
import { Link } from "gatsby";
import Layout from "../components/Layout.jsx"
import SimpleHero from "../components/SimpleHero.jsx";
import Banner from '../components/Banner.jsx';
import About from '../components/home/About.jsx';
import Services from '../components/home/Services.jsx';

export default () => (
    <Layout>

        <SimpleHero>
            <Banner title="continue exploring"
                    info="Lorem ipsum dolor sit amet, poribus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!">
                <Link   to='/Tours'
                        className="btn-white">
                    Explore Tours
                </Link>>
            </Banner>
        </SimpleHero>

        <About/>
        <Services/>
    </Layout>
);