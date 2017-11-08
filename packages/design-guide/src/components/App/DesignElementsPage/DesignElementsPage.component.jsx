import React from 'react';
import '../../../assets/quote.svg';

import Page from '../Page/Page.component';

import QuoteElement from './elements/QuoteElement/QuoteElement.component';
import QuestionElement from './elements/QuestionElement/QuestionElement.component';
import TabsElement from './elements/TabsElement/TabsElement.component';
import AccordionElement from './elements/AccordionElement/AccordionElement.component';
import AccordionTableElement from './elements/AccordionTableElement/AccordionTableElement.component';
import AnchorListElement from './elements/AnchorListElement/AnchorListElement.component';
import CheckmarkListElement from './elements/CheckmarkListElement/CheckmarkListElement.component';
import CheckmarkTableElement from './elements/CheckmarkTableElement/CheckmarkTableElement.component';
import InfoboxElement from './elements/InfoboxElement/InfoboxElement.component';
import LineGraphElement from './elements/LineGraphElement/LineGraphElement.component';
import CircleGraphElement from './elements/CircleGraphElement/CircleGraphElement.component';
import UspCardElement from './elements/UspCardElement/UspCardElement.component';

import './DesignElementsPage.scss';

export default () => (
  <Page
    title="Design Elements"
    className="design-elements-page"
    subtitle="Elements used throughout the McMakler Website"
  >
    <div className="container" >
      <QuoteElement />
      <QuestionElement />
      <TabsElement />
      <AccordionElement />
      <AccordionTableElement />
      <AnchorListElement />
      <CheckmarkListElement />
      <CheckmarkTableElement />
      <InfoboxElement />
      <LineGraphElement />
      <CircleGraphElement />
      <UspCardElement />
    </div>
  </Page>);
