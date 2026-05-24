import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, children }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {children}
    </Helmet>
  );
};

export default SEO;
