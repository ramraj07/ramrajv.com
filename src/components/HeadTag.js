import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const HeadTag = ({ title, description, path }) => (
  <Helmet defaultTitle="Ramraj Velmurugan" titleTemplate={`${title} - Ramraj`}>
    <title>{title}</title>
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
    <meta name="author" content="Ramraj Velmurugan" />
    <meta name="keywords" content="ramraj, velmurugan, site, website, personal, portfolio, blog" />
    <meta name="description" content={description} />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-navbutton-color" content="#000000" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <meta property="og:title" content={title} />
    <meta property="og:url" content={`https://ramrajv.com${path}`} />
    <meta property="og:site_name" content="Ramraj Velmurugan's personal site" />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="https://ramrajv.com/android-chrome-512x512.png?v=2" />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="https://ramrajv.com/android-chrome-512x512.png?v=2" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@egrodo" />

    <link rel="apple-touch-icon" sizes="180x180" href="https://ramrajv.com/apple-touch-icon.png?v=2" />
    <link rel="icon" type="image/png" sizes="32x32" href="https://ramrajv.com/favicon-32x32.png?v=2" />
    <link rel="icon" type="image/png" sizes="16x16" href="https://ramrajv.com/favicon-16x16.png?v=2" />
    <link rel="manifest" href="https://ramrajv.com/site.webmanifest" />
    <link rel="mask-icon" href="https://ramrajv.com/safari-pinned-tab.svg" color="#b200f0" />
    <meta name="msapplication-TileColor" content="#b200f0" />
    <meta name="theme-color" content="#ffffff" />
  </Helmet>
);

HeadTag.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
};

HeadTag.defaultProps = {
  title: 'Personal Site',
  description: 'Personal website for Ramraj Velmurugan.',
  path: '/',
};

export default HeadTag;
