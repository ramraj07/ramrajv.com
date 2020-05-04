import React from 'react';
import { Link as InternalLink, StaticQuery, graphql } from 'gatsby';
import ContentBlock from '../components/ContentBlock';

import CSS from '../css/ProjectSection.module.css';

const query = graphql`
  query ProjectQuery {
    allProjectsJson(limit: 500) {
      edges {
        node {
          title
          description
          link
        }
      }
    }
  }
`;

const ProjectSection = () => (
  <StaticQuery
    query={query}
    render={data => (
      <section className={CSS.Projects} id="Projects">
        <div className={CSS.sectionHeader}>
          <h1>
            <InternalLink
              to="projects"
              className={CSS.headerLink}
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to projects"
              title="Click to go to projects index"
            >
              Projects
            </InternalLink>
          </h1>
        </div>
        <div className={CSS.sectionArea}>
          {data.allProjectsJson.edges.map(({ node }) => <ContentBlock type="project" node={node} key={node.title} />)}
        </div>
      </section>
    )}
  />
);

export default ProjectSection;
