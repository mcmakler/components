import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import { html, css } from './snippets/tables.snippet';

import './TablesPage.scss';

export default () => (
  <Page
    title="Tables"
    className="tables-page"
    subtitle="This is what tables should look like"
  >
    <div className="container page-section" >
      <header>
        <h2 className="heading heading_secondary">Basic Tables</h2>
      </header>
      <div className="columns">
        <div className="column">
          <CodeSnippet language="html">
            { html }
          </CodeSnippet>
          <br />
          <CodeSnippet language="css">
            { css }
          </CodeSnippet>
        </div>
        <div className="column">
          <PreviewBox className="center">
            <table className="table">
              <thead className="table__header">
                <tr>
                  <th className="table__cell table__cell_header">Jahr</th>
                  <th className="table__cell table__cell_header">Preis</th>
                  <th className="table__cell table__cell_header">Fläche</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table__row">
                  <td className="table__cell">2016</td>
                  <td className="table__cell">50.000 &euro;</td>
                  <td className="table__cell">92m</td>
                </tr>
                <tr className="table__row">
                  <td className="table__cell">2016</td>
                  <td className="table__cell">50.000 &euro;</td>
                  <td className="table__cell">92m</td>
                </tr>
                <tr className="table__row">
                  <td className="table__cell">2016</td>
                  <td className="table__cell">50.000 &euro;</td>
                  <td className="table__cell">92m</td>
                </tr>
              </tbody>
            </table>
          </PreviewBox>
          <PreviewBox className="background_bg center">
            <table className="table">
              <thead className="table__header">
                <tr>
                  <th
                    className={'table__cell table__cell_inverted table__cell_header table__cell_header_inverted'}
                  >
                    Jahr
                  </th>
                  <th
                    className={'table__cell table__cell_inverted table__cell_header table__cell_header_inverted'}
                  >
                    Preis
                  </th>
                  <th
                    className={'table__cell table__cell_inverted table__cell_header table__cell_header_inverted'}
                  >
                    Fläche
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="table__row">
                  <td className="table__cell table__cell_inverted">2016</td>
                  <td className="table__cell table__cell_inverted">50.000 &euro;</td>
                  <td className="table__cell table__cell_inverted">92m</td>
                </tr>
                <tr className="table__row">
                  <td className="table__cell table__cell_inverted">2016</td>
                  <td className="table__cell table__cell_inverted">50.000 &euro;</td>
                  <td className="table__cell table__cell_inverted">92m</td>
                </tr>
                <tr className="table__row">
                  <td className="table__cell table__cell_inverted">2016</td>
                  <td className="table__cell table__cell_inverted">50.000 &euro;</td>
                  <td className="table__cell table__cell_inverted">92m</td>
                </tr>
              </tbody>
            </table>
          </PreviewBox>
        </div>
      </div>
    </div>
  </Page>);
