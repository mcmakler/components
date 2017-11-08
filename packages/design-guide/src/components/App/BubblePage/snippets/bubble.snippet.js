export const css = '@import "~mcmakler-design-guide/elements/bubbles";';

export const html = `<section className="bubble">
  <article className="bubble-text">
    <header className="bubble-text__heading">
      <div className="bubble-text__heading-title">
        Ich bin mehr als zufrieden!
      </div>
      <div className="bubble-text__heading-date">
        17.02.2017
      </div>
    </header>
    <div className="stars-rating">
      <div className="stars">
        <div className="stars__filled">
          &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
        </div>
        <div className="stars__empty">
          &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
        </div>
      </div>
      <div className="rating">
        4.8/5.0
      </div>
    </div>
    <section className="bubble-text__content">
      In Zeiten von Nullzinsen und turbulenten Börsen
      bieten unsereInvestment-Möglichkeiten attraktive
      Zinsen in der konservativen Anlageklasse Immobilien.
    </section>
  </article>

  <article className="bubble-person">
    <div className="bubble-person__image">
      <img alt="Thomas Meier"
            src="assets/bubble_image.jpg" />
    </div>
    <div className="bubble-person__info">
      <div className="bubble-person__info-name">
        Thomas Meier
      </div>
      <div className="bubble-person__info-title">
        Makler bei McMakler
      </div>
    </div>
  </article>
</section>`;
