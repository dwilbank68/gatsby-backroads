import React from 'react';
// import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import BlogCard from './BlogCard.jsx';
import Title from '../../components/Title.jsx';
import {useStaticQuery, graphql} from 'gatsby';
import styles from '../../css/blog.module.css';
// import BlogList from './BlogList.jsx';
// const BlogList = (props) => {

const getPosts = graphql`
    query {
		posts: allContentfulPost(sort:{fields:published, order:DESC}) {
            edges {
                node {
                    published(formatString:"MMMM Do, YYYY")
                    title slug id:contentful_id
                    image {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`
const BlogList = () => {
    const {posts} = useStaticQuery(getPosts);
    return (
        <section className={styles.blog}>
            <Title titleLeft="our" titleRight="blogs"/>
            <div className={styles.center}>
                {posts.edges.map(({node}) => (
                    <BlogCard key={node.id} blog={node}/>
                ))}
            </div>
        </section>
    );
};


export default BlogList;