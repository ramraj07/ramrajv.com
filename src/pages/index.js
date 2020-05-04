import React from 'react';
import { Link as InternalLink } from 'gatsby';
import HeadTag from '../components/HeadTag';
import HeaderSection from '../sections/HeaderSection';
import ProjectSection from '../sections/ProjectSection';
import BlogSection from '../sections/BlogSection';
import ContactSection from '../sections/ContactSection';

import 'normalize.css';
import '../css/index.css';

// sectionHeader needs to be outside of content so it can have a transparent bg.
const indexPage = () => (
  <>
    <HeadTag />
    <header className="IndexHeader">
      <HeaderSection />
    </header>
    <div className="IndexSectionHeader" id="Blog">
      <h1>
        <InternalLink
          to="blog"
          target="_blank"
          rel="noopener noreferrer"
          alt="Link to my blog"
          title="Link to my blog"
        >
          Essays
        </InternalLink>
      </h1>
    </div>
    <div className="IndexContent">
      <BlogSection />
      <ProjectSection />
      <ContactSection />
    </div>
  </>
);

export default indexPage;
