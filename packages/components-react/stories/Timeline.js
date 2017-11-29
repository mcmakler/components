import React from 'react';
import { storiesOf } from '@storybook/react';
import { Timeline, TimelineHeader, TimelineContainer, TimelineLine, TimelineItems, TimelineItem } from '../src';

storiesOf('Timeline', module)
  .addWithInfo(
    'timeline',
    `
      timeline component
    `,
    () => (
      <Timeline className="container">
        <TimelineHeader
          headline="Partner werden in nur 3 Schritten"
          claim="Melden Sie sich kostenlos an und starten Sie mit uns durch."
        />
        <TimelineContainer>
          <TimelineItems>
            <TimelineItem>
              <img
                className="timeline__image"
                src="https://placeimg.com/360/240/arch"
                alt="Placeholder"
              />
              <h4 className="timeline__heading">
                Melden Sie sich bei unserem Partnerprogramm an
              </h4>
            </TimelineItem>
            <TimelineItem>
              <img
                className="timeline__image"
                src="https://placeimg.com/360/240/tech"
                alt="Placeholder"
              />
              <h4 className="timeline__heading">
                Binden Sie unsere Werbemittel ein
              </h4>
            </TimelineItem>
            <TimelineItem>
              <img
                className="timeline__image"
                src="https://placeimg.com/360/240/people"
                alt="Placeholder"
              />
              <h4 className="timeline__heading">
                Erhalten Sie 40€ Provision für jeden qualifizierten Lead
              </h4>
            </TimelineItem>
          </TimelineItems>
          <TimelineItems>
            <TimelineItem>
              <TimelineLine position="first" />
              <p>
                Füllen Sie die
                <a href="https://modules.affili.net/Signup/15845/?pl=1" target="_blank" rel="noopener noreferrer">kostenlose Anmeldung</a> aus und erstellen Sie Ihren Publisher Account.
              </p>
            </TimelineItem>
            <TimelineItem>
              <TimelineLine />
              <p>
                Wählen Sie aus einer Anzahl von ansprechenden,
                klickstarken Werbemitteln das passende für Sie aus.
              </p>
            </TimelineItem>
            <TimelineItem>
              <TimelineLine position="last" />
              <p>
                Profitieren Sie von einer hohen Lead-Vergütung,
                deutlich über dem Marktdurchschnitt..
              </p>
            </TimelineItem>
          </TimelineItems>
        </TimelineContainer>
      </Timeline>
    ),
  );
