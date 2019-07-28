import React from 'react';
import {StaticQuery, graphql} from "gatsby";
// import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';


// import example2 from './example2.jsx';
// const example2 = (props) => {
const Example2 = () => {

    const getSiteData = graphql`
        query {
            site {
               siteMetadata {
                    description, title, author
              }
            }
        }
    `

    // const [isOpen, setOpen] = useState(false);

    // const toggleNav = () => {
    //    setOpen(isOpen => !isOpen)
    // }



    return (
        <StaticQuery    query={getSiteData}
                        render={data => (
                            <div>
                                <h2>title:{data.site.siteMetadata.title}</h2>
                                <h2>author:{data.site.siteMetadata.author}</h2>
                            </div>
                        )}>
        </StaticQuery>
    );
};


export default Example2;