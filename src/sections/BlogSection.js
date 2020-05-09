import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ContentBlock from '../components/ContentBlock';

import CSS from '../css/BlogSection.module.css';

const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 3) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            date(formatString: "MMM Do, YYYY")
            path
            tag
            tag_color
          }
        }
      }
    }
  }
`;

const BlogSection = () => (
  <StaticQuery
    query={query}
    render={({ allMarkdownRemark: { edges } }) => (
      <section className={CSS.Blog}>
        <div className={CSS.sectionArea}>
          {edges.map(({ node }) => <ContentBlock type="blog" node={node} key={node.frontmatter.title} />)}
        </div>
      </section>
    )}
  />
);

export default BlogSection;
