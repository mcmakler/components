import React, { Component } from 'react';

import Carousel from '../../../js/carousel/carousel';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';

import './CarouselPage.scss';

class CarouselPageComponent extends Component {
  componentDidMount() {
    new Carousel({ element: document.querySelector('.carousel') }).init();
  }

  render() {
    return (<Page title="Carousel" subtitle="Not with 🐎 but with images. 😁" >
      <section className="container page-section" >
        <PreviewBox>
          <div className="carousel" >
            <div className="carousel__navigation carousel__navigation_prev" />
            <div className="carousel__items" >
              <div className="carousel__item" >
                <figure className="figure" >
                  <img
                    alt="Placeholder"
                    src="http://lorempixel.com/260/230/business/"
                  />
                  <figcaption className="figure__caption" >
                    <h4 className="figure__header" >
                      Placeholder
                    </h4>
                    <p className="figure__description" >
                      This is my placeholder, son.
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel__item" >
                <figure className="figure" >
                  <img
                    alt="Placeholder"
                    src="http://lorempixel.com/260/230/business/"
                  />
                  <figcaption className="figure__caption" >
                    <h4 className="figure__header" >
                      Placeholder
                    </h4>
                    <p className="figure__description" >
                      This is my placeholder, son.
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel__item" >
                <figure className="figure" >
                  <img
                    alt="Placeholder"
                    src="http://lorempixel.com/260/230/business/"
                  />
                  <figcaption className="figure__caption" >
                    <h4 className="figure__header" >
                      Placeholder
                    </h4>
                    <p className="figure__description" >
                      This is my placeholder, son.
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel__item" >
                <figure className="figure" >
                  <img
                    alt="Placeholder"
                    src="http://lorempixel.com/260/230/business/"
                  />
                  <figcaption className="figure__caption" >
                    <h4 className="figure__header" >
                      Placeholder
                    </h4>
                    <p className="figure__description" >
                      This is my placeholder, son.
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel__item" >
                <figure className="figure" >
                  <img
                    alt="Placeholder"
                    src="http://lorempixel.com/260/230/business/"
                  />
                  <figcaption className="figure__caption" >
                    <h4 className="figure__header" >
                      Placeholder
                    </h4>
                    <p className="figure__description" >
                      This is my placeholder, son.
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel__item" >
                <figure className="figure" >
                  <img
                    alt="Placeholder"
                    src="http://lorempixel.com/260/230/business/"
                  />
                  <figcaption className="figure__caption" >
                    <h4 className="figure__header" >
                      Placeholder
                    </h4>
                    <p className="figure__description" >
                      This is my placeholder, son.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="carousel__navigation carousel__navigation_next" />
          </div>
        </PreviewBox>
      </section>
    </Page>);
  }
}

export default CarouselPageComponent;
