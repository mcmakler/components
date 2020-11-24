import { FaFacebookF } from 'react-icons/fa/index';
import { IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';
import { TiSocialLinkedin } from 'react-icons/ti';

import React from 'react';
import PropTypes from 'prop-types';

const iconMap = {
  FACEBOOK: FaFacebookF,
  INSTAGRAM: IoLogoInstagram,
  LINKEDIN: TiSocialLinkedin,
  TWITTER: IoLogoTwitter,
};

const SocialLinks = ({ links }) => (
  <div className="social">
    {links.map(link => (
      <a
        key={link.url}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="social__icon"
      >
        {iconMap[link.icon]()}
      </a>
    ))}
  </div>
);

SocialLinks.propTypes = {
  links: PropTypes.instanceOf(Object),
};

SocialLinks.defaultProps = {
  links: [
    { url: 'https://www.facebook.com/mcmakler.de', icon: 'FACEBOOK' },
    { url: 'https://www.instagram.com/mcmakler.de/', icon: 'INSTAGRAM' },
    { url: 'https://www.linkedin.com/company/mcmakler-gmbh/', icon: 'LINKEDIN' },
    { url: 'https://twitter.com/McMaklerDE', icon: 'TWITTER' },
  ],
};

export default SocialLinks;
