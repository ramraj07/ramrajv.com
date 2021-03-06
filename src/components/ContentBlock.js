import React from 'react';
import { Link as InternalLink } from 'gatsby';
import FancyLink from './FancyLink';
import { css } from "styled-components";
import styled from "styled-components";

import CSS from '../css/ContentBlock.module.css';

const myCSS = css`
    background: ${({ myColor }) => myColor || `black`};
`;

const Tag = styled('span')`
    ${myCSS};
`;

const ContentBlock = ({ type, node }) => {
  if (type === 'blog') {
    return (
      <div className={CSS.blogPost}>
        <div className={CSS.blogTitle}>
          <div className={CSS.postTitle}>
            <h2>
              <InternalLink to={node.frontmatter.path}>
                {node.frontmatter.title}
              </InternalLink>
            </h2>
          </div>
          <div className={CSS.postDateTag}>
            <span className={CSS.postDate}>{node.frontmatter.date}</span>
          </div>
        </div>
        <div className={CSS.blogContent}>
          <p className={CSS.blogDesc}>{node.frontmatter.excerpt}</p>
          <div className={CSS.blogLink}>
          <Tag myColor={node.frontmatter.tag_color} className={CSS.postTag}>{node.frontmatter.tag}</Tag>

            <FancyLink
              to={node.frontmatter.path}
              target="_blank"
              rel="noopener noreferrer"
              internal
            >
              <span className={CSS.fancyLinkText}> Read More... </span>
            </FancyLink>
          </div>
        </div>
      </div>
    );
  } if (type === 'project') {
    return (
      <div className={CSS.project}>
        <div className={CSS.projDescContainer}>
          <h2 className={CSS.projDescTitle}>{node.title}</h2>
          <p className={CSS.projDesc}>{node.description}</p>
          <div className={CSS.projLink}>
            <FancyLink to={node.link} newTab>
              Check It Out
            </FancyLink>
          </div>
        </div>
      </div>
    );
  }

  // If no type passed, error.
  throw new TypeError('Invalid type passed to ContentBlock');
};

export default ContentBlock;
