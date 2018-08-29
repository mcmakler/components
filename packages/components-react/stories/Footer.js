import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '../src';

const FooterData = {
  menuList: [
    { name: 'Über Uns', url: 'https://www.mcmakler.de/ueber-mcmakler/' },
    { name: 'Unser Team', url: 'https://www.mcmakler.de/unser-team/' },
    { name: 'Standorte', url: 'https://www.mcmakler.de/standorte/' },
    { name: 'Karriere', url: 'https://www.mcmakler.de/karriere/' },
    { name: 'Presse', url: 'https://www.mcmakler.de/presse/' },
  ],
  contactInfo: {
    title: 'Kontakt',
    email: 'service@mcmakler.de',
    emailDescription: 'McMakler Email-Adresse',
    phone: '0800 500 80 020',
    phoneHref: '+498005008002',
    phoneDescription: 'Kostenlose Service-Hotline',
    contactDescription: `
      Wir beraten Sie gerne in einem persönlichen
      Gespräch am Telefon. Wir sind erreichbar
      von Montag bis Freitag von 8:00 — 20:00
      Uhr, Sa-So 9:00 — 18:00 Uhr.
      `,
  },
  awards: {
    title: 'Auszeichnungen',
    badges: [
      {
        defaultScenario: true,
        url: 'https://www.mcmakler.de/pdf/tuv.pdf',
        src: 'https://www.mcmakler.de/images/logos/tuv-official.png',
        alt: 'TÜV Siegel',
        title: 'TÜV geprüftes Onlineportal',
        modifier: 'footer__tuv',
      },
      {
        defaultScenario: false,
        text: 'Ausgezeichnet.org',
        url: 'https://www.ausgezeichnet.org',
        alt: 'AUSGEZEICHNET.ORG Siegel',
        title: '"AUSGEZEICHNET.ORG Gütesiegel',
        modifier: 'auorg-br',
      },
      {
        defaultScenario: true,
        url: 'https://www.ekomi.de/bewertungen-mcmakler-gmbh.html',
        src: 'https://www.mcmakler.de//images/logos/ekomi.png',
        alt: 'eKomi Siegel',
        title: 'eKomi Siegel Gold',
        modifier: 'ekomi-badge',
      },
    ],
  },
  socialLinks: [
    { url: 'https://www.facebook.com/mcmakler.de', icon: 'FACEBOOK' },
    { url: 'https://www.instagram.com/mcmakler.de/', icon: 'INSTAGRAM' },
    { url: 'https://www.linkedin.com/company/mcmakler-gmbh/', icon: 'LINKEDIN' },
    { url: 'https://twitter.com/McMaklerDE', icon: 'TWITTER' },
  ],
  footerLinks: [
    { name: 'AGB', url: 'https://www.mcmakler.de/agb' },
    { name: 'Datenschutz', url: 'https://www.mcmakler.de/datenschutz' },
    { name: 'Impressum', url: 'https://www.mcmakler.de/impressum' },
  ],
  copyright: 'McMakler GmbH - Alle Rechte vorbehalten',
};

storiesOf('Footer', module)
  .addWithInfo(
    'enabled',
    `
      This is the default footer for the mcmakler sites
    `,
    () => (
      <Footer data={FooterData} />
    ),
  );
