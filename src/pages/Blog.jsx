import React from 'react';
import Layout from "../components/Layout.jsx";

import { Link } from "gatsby"
// import PropTypes from 'prop-types';
// import Foo from './images/foo.png';


// import Blog from './Blog.jsx';
// const Blog = (props) => {
const Blog = ({whatever1, whatever2}) => {
    // no lifecycle methods
    // no refs

    const methodName = (e) => {
        //
    }

    return (
        <Layout    className="blog">
            <a onClick={methodName}>Click</a>
            Blog page
          <Link to="/">
            Home
          </Link>
        </Layout>
    );
};

export default Blog;
