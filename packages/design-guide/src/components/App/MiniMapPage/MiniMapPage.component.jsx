import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';
import MiniMap from '../MiniMapComponent/MiniMap.component';

import { noMarker, marker } from './snippets/minimap.snippet';

export default() => (
  <Page
    title="MiniMap"
    className="minimap-page"
    subtitle="from google"
  >
    <section className="container page-section" >
      <div className="columns">
        <div className="column">
          <CodeSnippet language="html">
            { noMarker }
          </CodeSnippet>
        </div>
        <div className="column">
          <PreviewBox>
            <MiniMap
              isMarkerShown={false}
              center={{ lat: 52.529784, lng: 13.401378 }}
            />
          </PreviewBox>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <CodeSnippet language="html">
            { marker }
          </CodeSnippet>
        </div>
        <div className="column">
          <PreviewBox>
            <MiniMap
              isMarkerShown
              center={{ lat: 52.529784, lng: 13.401378 }}
            />
          </PreviewBox>
        </div>
      </div>
    </section>
  </Page>
);
