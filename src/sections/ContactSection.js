import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import FancyLink from '../components/FancyLink';

import CSS from '../css/ContactSection.module.css';

const query = graphql`
  query ContactQuery {
    instaImg: file(relativePath: { eq: "instagram.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 32, height: 32) {
          src
          srcSet
          width
          height
        }
      }
    }
    linkedinImg: file(relativePath: { eq: "linkedin.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 32, height: 32) {
          src
          srcSet
          width
          height
        }
      }
    }
    githubImg: file(relativePath: { eq: "github.png" }) {
      relativePath
      childImageSharp {
        fixed(width: 32, height: 32) {
          src
          srcSet
          width
          height
        }
      }
    }
  }
`;

const ContactSection = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const githubImg = data?.githubImg?.childImageSharp?.fixed;
      const instaImg = data?.instaImg?.childImageSharp?.fixed;
      const linkedinImg = data?.linkedinImg?.childImageSharp?.fixed;

      return (
        <section className={CSS.Contact} id="Contact">
          <div className={CSS.sectionHeader}>
            <div className={CSS.sectionArea}>
              <div className={CSS.emailLink}>
                <FancyLink to="mailto:ramraj@gmail.com" newTab animated>
                  ramraj@gmail.com
                </FancyLink>
              </div>
              <p className={CSS.contactDesc}>
                The site was forked with permission from the brilliant design at &nbsp;
                <a href="https://noahyamamoto.com/">noahyamamoto.com</a>.
              </p>
              <div className={`${CSS.socialContainer} ${CSS.contact}`}>
                <a
                  href="https://www.linkedin.com/in/ramraj.velmurugan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CSS.socialLink}
                >
                  <Image fixed={linkedinImg} className={CSS.socialImg} alt="Linkedin Link" />
                </a>
                <a
                  href="https://github.com/ramraj07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CSS.socialLink}
                >
                  <Image fixed={githubImg} className={CSS.socialImg} alt="Github Link" />
                </a>
              </div>
              <h5 className={CSS.copyright}>
                Ramraj Velmurugan | &copy;
                {' '}
                {new Date().getFullYear()}
              </h5>
            </div>
          </div>
        </section>
      );
    }}
  />
);


ContactSection.propTypes = {
  footer: PropTypes.bool,
};

ContactSection.defaultProps = {
  footer: false,
};

export default ContactSection;
