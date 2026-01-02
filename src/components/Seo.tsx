import React from 'react';
import { Helmet } from 'react-helmet-async';
import { brand } from '../config/brand';

type Props = {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

const Seo: React.FC<Props> = ({ title, description, canonical, ogTitle, ogDescription, ogImage }) => {
  const pageTitle = title;
  const fallbackUrl = canonical || 'https://www.vdac.legal/';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: brand.legalName,
    alternateName: brand.shortName,
    url: fallbackUrl,
    email: brand.contactEmail,
    areaServed: 'Global',
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={ogTitle || pageTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fallbackUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default Seo;
