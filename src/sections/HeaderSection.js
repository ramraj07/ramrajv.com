import React, { useState, useEffect, useRef } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import FancyLink from '../components/FancyLink';

import CSS from '../css/HeaderSection.module.css';

const query = graphql`
  query HeaderQuery {
    resumeLink: allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    profilePic: file(relativePath: { eq: "profilePic.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          src
          srcSet
        }
      }
    }
    linkedinImg: file(relativePath: { eq: "linkedin.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 128, height: 128) {
          src
          srcSet
        }
      }
    }
    githubImg: file(relativePath: { eq: "github.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 128, height: 128) {
          src
          srcSet
        }
      }
    }
    scholarImg: file(relativePath: { eq: "scholar.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 128, height: 128) {
          src
          srcSet
        }
      }
    }
  }
`;

function HeaderSection() {
  const [{ hideAll, hideFooter }, setHidden] = useState({ hideAll: false, hideFooter: false });

  const headerRef = useRef();
  const footerRef = useRef();

  const handleScroll = () => {
    // First check if the user has passed the arrow
    const newState = { hideAll: false, hideFooter: false };
    if (window.scrollY > footerRef.current.scrollHeight + 100) {
      newState.hideFooter = true;
    } else newState.hideFooter = false;
    if (window.scrollY > headerRef.current.scrollHeight) {
      newState.hideAll = true;
    } else newState.hideAll = false;
    setHidden(newState);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll, false);
  }, []);

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        // @babel/plugin-optional-chaining cause jeez graphql is nested.
        const resumeLink = data?.resumeLink?.edges[0]?.node?.publicURL;
        const profilePic = data?.profilePic?.childImageSharp?.fixed;
        const githubImg = data?.githubImg?.childImageSharp?.fixed;
        const scholarImg = data?.scholarImg?.childImageSharp?.fixed;
        const linkedinImg = data?.linkedinImg?.childImageSharp?.fixed;

        return (
          <header className={`${CSS.Header} ${hideAll && CSS.hide}`} ref={headerRef}>
            <div className={CSS.profileImgContainer}>
              <img src={profilePic.src} className={CSS.profileImg} alt="Ramraj Velmurugan" />
            </div>
            <div className={CSS.introContainer}>
              <div>Hi there, I&apos;m</div>
              <span className={CSS.fancyGradient}>
                <span className={CSS.fancyName}>Ramraj Velmurugan</span>
              </span>
            </div>
            <div className={CSS.blurbContainer}>
              <p>
                I&apos;m a Data Science Contractor working with <a href="https://komodohealth.com" className={CSS.underlined}>Komodo Health</a>.
                I create products that can seamlessly summarize complex datasets in insightful ways. 
                Previously I completed a PhD processing images and looking at immune cells eating up cancer cells.
              </p>
              <FancyLink
                to={resumeLink}
                style={{
                  fontFamily: 'Work Sans',
                }}
                newTab
              >
                Full Resume
              </FancyLink>
            </div>
            <div className={CSS.socialContainer}>
              <a
                href="https://www.linkedin.com/in/ramraj-velmurugan"
                target="_blank"
                rel="noopener noreferrer"
                className={CSS.socialLink}
              >
                <img src={linkedinImg.src} className={CSS.socialImg} alt="Linkedin Link" />
              </a>
              <a href="https://github.com/ramraj07/" target="_blank" rel="noreferrer noopener" className={CSS.socialLink}>
                <img src={githubImg.src} className={CSS.socialImg} alt="Github Link" />
              </a>
              <a href="https://scholar.google.com/citations?user=aWpiaisAAAAJ&hl=en" target="_blank" rel="noreferrer noopener" className={CSS.socialLink}>
                <img src={scholarImg.src} className={CSS.socialImg} alt="Google Scholar Link" />
              </a>
            </div>
            <a href="#Blog" className={`${CSS.scrollContainer} ${hideFooter ? CSS.hide : ''}`} ref={footerRef}>
              <div className={CSS.chevronContainer}>
                <div className={CSS.scrollChevron} />
                <div className={CSS.scrollChevron} />
                <div className={CSS.scrollChevron} />
              </div>
            </a>
          </header>
        );
      }}
    />
  );
}

export default HeaderSection;
