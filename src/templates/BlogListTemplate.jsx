import React from 'react';
import {graphql} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout.jsx';
import BlogCard from '../components/blog/BlogCard.jsx';
import Title from '../components/Title.jsx';
import styles from '../css/blog.module.css';

const BlogListTemplate = (props) => {

    const {data} = props;
    const {currentPage, numPages} = props.pageContext;
    let prevPage = currentPage - 1 === 1 ? `/Blogs` : `/Blogs/${currentPage-1}`;
    let nextPage = `/Blogs/${currentPage+1}`;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    return (
        <Layout>
           <section className={styles.blog}>
               <Title titleLeft="latest" titleRight="posts"/>
               <div className={styles.center}>
                   {data.posts.edges.map(({node}) => (
                       <BlogCard    key={node.id}
                                    blog={node}/>
                   ))}
               </div>

               <section className={styles.links}>

                   {!isFirst &&
                   <AniLink fade to={prevPage} className={styles.link}>
                       Prev
                   </AniLink>}

                   {Array.from({length:numPages}, (_,i) => (
                       <AniLink fade to={`/Blogs/${i === 0 ? "": i + 1}`}
                                key={i}
                                className={styles.link + ' ' + (i+1 === currentPage ? styles.active : '')}>
                           {i+1}
                       </AniLink>
                   ))}

                   {!isLast &&
                   <AniLink fade to= {nextPage} className={styles.link}>
                       Next
                   </AniLink>}

               </section>

           </section>
        </Layout>
    );
};


export const query = graphql`
query getPosts($skip:Int!, $limit:Int!){
    posts:allContentfulPost
  	(	limit: $limit, skip: $skip,
      	sort:{fields:published, order:DESC}
    )
  	{
      	edges {
          	node {
              	slug title id:contentful_id
              	published(formatString:"MMMM Do, YYYY")
              	image {
                  	fluid{...GatsbyContentfulFluid}
                }
            }
        }
    }
}
`
export default BlogListTemplate;