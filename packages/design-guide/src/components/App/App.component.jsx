import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Navigation from './Navigation/Navigation.component';
import GridPage from './GridPage/GridPage.component';
import TypographyPage from './TypographyPage/TypographyPage.component';
import ColorsPage from './ColorsPage/ColorsPage.component';
import ButtonsPage from './ButtonsPage/ButtonsPage.component';
import DesignElementsPage from './DesignElementsPage/DesignElementsPage.component';
import TablesPage from './TablesPage/TablesPage.component';
import FiguresPage from './FiguresPage/FiguresPage.component';
import SectionsPage from './SectionsPage/SectionsPage.component';
import CarouselPage from './CarouselPage/CarouselPage.component';
import MiniMapPage from './MiniMapPage/MiniMapPage.component';
import TimelinePage from './TimelinePage/TimelinePage.component';
import StarRatingPage from './StarRatingPage/StarRatingPage.component';
import BubblePage from './BubblePage/BubblePage.component';

import './App.scss';

const history = createHistory();

export default () => (
  <Router history={history}>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={GridPage} />
        <Route path="/grid" component={GridPage} />
        <Route path="/typography" component={TypographyPage} />
        <Route path="/colors" component={ColorsPage} />
        <Route path="/buttons" component={ButtonsPage} />
        <Route path="/elements" component={DesignElementsPage} />
        <Route path="/tables" component={TablesPage} />
        <Route path="/figures" component={FiguresPage} />
        <Route path="/page-sections" component={SectionsPage} />
        <Route path="/carousel" component={CarouselPage} />
        <Route path="/minimap" component={MiniMapPage} />
        <Route path="/timeline" component={TimelinePage} />
        <Route path="/starrating" component={StarRatingPage} />
        <Route path="/bubble" component={BubblePage} />
      </Switch>
    </div>
  </Router>
);
