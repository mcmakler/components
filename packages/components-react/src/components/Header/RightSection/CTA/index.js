import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CTA extends Component {
  componentDidMount() {
    this.launchCTA();
  }

  launchCTA() {
    this.headerCtaElement = document.querySelector('.header__call-to-action');

    document.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        this.headerCtaElement.classList.add('button_secondary');
        this.headerCtaElement.classList.remove('button_primary');
        return true;
      }

      if (this.headerCtaElement.classList.contains('button_primary')) {
        return false;
      }

      this.headerCtaElement.classList.remove('button_secondary');
      this.headerCtaElement.classList.add('button_primary');
      return true;
    });
  }

  render() {
    const { ctaLabel, ctaTarget } = this.props;
    return (
      <a className="button button_secondary header__call-to-action" href={ctaTarget}>
        {ctaLabel}
      </a>
    );
  }
}

CTA.propTypes = {
  ctaLabel: PropTypes.string.isRequired,
  ctaTarget: PropTypes.string.isRequired,
};

export default CTA;
