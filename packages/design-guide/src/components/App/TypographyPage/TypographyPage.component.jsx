import React from 'react';

import Page from '../Page/Page.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import * as headingStyles from './snippets/headings.style';
import navigationStyles from './snippets/navigation.style';
import linkStyles from './snippets/links.style';
import fineprintStyles from './snippets/fineprint.style';

import './TypographyPage.scss';

const TypographyPage = () => (
  <Page
    title="Typography"
    className="typography-page"
    subtitle="Detailed definition of font styles and colors"
  >
    {/* H1 */}
    <section className="container columns page-section" >
      <div className="column is-one-third" >
        <CodeSnippet language="css" >
          {headingStyles.H1_HEADING_STYLES}
        </CodeSnippet>
      </div>
      <div className="column " >
        <PreviewBox>
          <h1 className="heading heading_primary" >This is a Normal &lt;H1&gt;.</h1>
        </PreviewBox>
        <PreviewBox>
          <h1 className="heading heading_primary" >This is a Veeeeeeeeeeery Long Normal Heading</h1>
        </PreviewBox>
        <PreviewBox className="inverted" >
          <h1 className="heading heading_primary" >This is an Inverted Heading</h1>
        </PreviewBox>
      </div>
    </section>
    {/* H2 */}
    <section className="container columns page-section" >
      <div className="column is-one-third" >
        <CodeSnippet language="css" >
          {headingStyles.H2_HEADING_STYLES}
        </CodeSnippet>
      </div>
      <div className="column " >
        <PreviewBox>
          <h2 className="heading heading_secondary" >This is a Normal &lt;H2&gt;.</h2>
        </PreviewBox>
        <PreviewBox><h2 className="heading heading_secondary" >
          This is a Veeeeeeeeeeery Long Normal &lt;H2&gt; tag. It is cool because I like pigs.
        </h2></PreviewBox>
        <PreviewBox>
          <h2 className="heading heading_secondary" >This is a &lt;H2&gt;...</h2>
          <p>
            With body text. How cool is this body text? This is by far the best body text you
            have ever seen. Donald Trump would be so proud. This is so amazing. Let us make body
            text great again.
          </p>
        </PreviewBox>
        <PreviewBox>
          <h2 className="heading heading_secondary" >This is a &lt;H2&gt; with a &lt;H3&gt;</h2>
          <h3 className="heading heading_tertiary" >
            They often go together, like in the heading of this page.
          </h3>
        </PreviewBox>
        <PreviewBox className="inverted" >
          <h2 className="heading heading_secondary" >This is an Inverted &lt;H2&gt;
          .</h2></PreviewBox>
      </div>
    </section>
    {/* H3 */}
    <section className="container columns page-section" >
      <div className="column is-one-third" >
        <CodeSnippet language="css" >
          {headingStyles.H3_HEADING_STYLES}
        </CodeSnippet>
      </div>
      <div className="column " >
        <PreviewBox>
          <h3 className="heading heading_tertiary" >This is a Normal &lt;H3&gt;.</h3>
        </PreviewBox>
        <PreviewBox>
          <h3 className="heading heading_tertiary" >
            This is a Veeeeeeeeeeery Long &lt;H3&gt;. Okay, it is not that long
            but I have to make it longer so words.
          </h3>
        </PreviewBox>
        <PreviewBox className="inverted" >
          <h3 className="heading heading_tertiary" >This is an Inverted &lt;H3&gt;.</h3>
        </PreviewBox>
      </div>
    </section>
    {/* H4 */}
    <section className="container columns page-section" >
      <div className="column is-one-third" >
        <CodeSnippet language="css" >
          {headingStyles.H4_HEADING_STYLES}
        </CodeSnippet>
      </div>
      <div className="column" >
        <PreviewBox>
          <h4 className="heading heading_quarternary" >This is a Normal &lt;H4&gt;.</h4>
        </PreviewBox>
        <PreviewBox>
          <h4 className="heading heading_quarternary" >
            This is a Veeeeeeeeeeery Long &lt;H4&gt;. Okay, it is not that long
            but I have to make it longer so words. Words words words words words.
          </h4>
        </PreviewBox>
        <PreviewBox>
          <h4 className="heading heading_quarternary" >This is a &lt;H4&gt;</h4>
          <p>With body text. A nice pairing, like good wine and cheese.</p>
        </PreviewBox>
        <PreviewBox className="inverted" >
          <h4 className="heading heading_quarternary" >This is an Inverted &lt;H4&gt;
          .</h4></PreviewBox>
      </div>
    </section>
    {/* H5 */}
    <section className="container columns page-section" >
      <div className="column is-one-third" >
        <CodeSnippet language="css" >
          {headingStyles.H5_HEADING_STYLES}
        </CodeSnippet>
      </div>
      <div className="column " >
        <PreviewBox>
          <h5 className="heading heading_quinary" >This is a Normal &lt;H5&gt;.</h5></PreviewBox>
        <PreviewBox>
          <h5 className="heading heading_quinary" >
            This is a Veeeeeeeeeeery Long &lt;H5&gt;. Okay, it is not that long
            but I have to make it longer so words. Words words words words words.
            Ricardo is spanish and he is also cool but not mexican NEVER CALL HIM
            MEXICAN.
          </h5>
        </PreviewBox>
      </div>
    </section>
    {/* BODY TEXT */}
    <section className="container columns page-section" >
      <div className="column is-one-third" >
        <CodeSnippet language="css" >
          {headingStyles.BODY_TEXT_STYLES}
        </CodeSnippet>
      </div>
      <div className="column " >
        <PreviewBox>
          <p>
            Bacon ipsum dolor amet brisket sausage ham hock cupim prosciutto flank tenderloin.
            Shank short loin bacon beef ribs. Pork chop ground round ribeye andouille, ham hock
            corned beef short loin venison strip steak bacon meatloaf. Hamburger short loin pig
            salami strip steak shank turducken t-bone short ribs. Short ribs pig pastrami, shank
            corned beef alcatra frankfurter shankle bresaola ham hock sirloin drumstick swine
            Swine ham hock cow corned beef flank.
          </p>
        </PreviewBox>
        <PreviewBox className="inverted" >
          <p>
            Gentrify air plant tilde glossier, man bun keytar next level cardigan bespoke.
            Slow-carb synth succulents subway tile scenester, fixie meh. Skateboard bitters
            next level, vice distillery blue bottle butcher enamel pin synth gentrify flexitarian.
            Keffiyeh hoodie small batch af kitsch, knausgaard kombucha yuccie four dollar toast.
            Vegan williamsburg coloring book, glossier poutine pug seitan live-edge mlkshk trust
            fund shabby chic lomo godard direct trade skateboard. Fashion axe austin schlitz squid
            8-bit. Tofu everyday carry gluten-free, mumblecore hammock raclette etsy art party
            ethical schlitz quinoa vape kinfolk.
          </p>
        </PreviewBox>
      </div>
    </section>
    {/* NAVIGATION LINKS */}
    <section className="container columns page-section" >
      <div className="column is-one-third" >
        <CodeSnippet language="css" >
          {navigationStyles}
        </CodeSnippet>
      </div>
      <div className="column " >
        <PreviewBox className="center" >
          <nav>
            <ul className="navigation-list" >
              <li
                className="navigation-list__item"
              >
                <a className="navigation-list__link" >This is a Navigation Link</a>
              </li>
            </ul>
          </nav>
        </PreviewBox>
        <PreviewBox className="center" >
          <nav>
            <ul className="navigation-list navigation-list_inline" >
              <li className="navigation-list__item_inline" >
                <a className="navigation-list__link navigation-list__link_active" >Mietpreise</a>
              </li>
              <li className="navigation-list__item_inline" >
                <a className="navigation-list__link" >Kaufpreis</a>
              </li>
              <li className="navigation-list__item_inline" >
                <a className="navigation-list__link" >Übersicht</a>
              </li>
            </ul>
          </nav>
        </PreviewBox>
        <PreviewBox className="center inverted" >
          <nav>
            <ul className="navigation-list navigation-list_inline" >
              <li className="navigation-list__item_inline" >
                <a className="navigation-list__link navigation-list__link_active" >Mietpreise</a>
              </li>
              <li className="navigation-list__item_inline" >
                <a className="navigation-list__link" >Kaufpreis</a>
              </li>
              <li className="navigation-list__item_inline" >
                <a className="navigation-list__link" >Übersicht</a>
              </li>
            </ul>
          </nav>
        </PreviewBox>
      </div>
    </section>
    {/* TEXT LINKS */}
    <section className="container columns page-section" >
      <div className="column is-one-third" >
        <CodeSnippet language="css" >
          {linkStyles}
        </CodeSnippet>
      </div>
      <div className="column " >
        <PreviewBox className="center" >
          <a className="link">This is a text link.</a>
        </PreviewBox>
        <PreviewBox className="center" >
          <p>Gentrify air plant tilde glossier, man bun keytar next level cardigan bespoke.
            synth succulents subway tile scenester, fixie meh. Skateboard bitters next level, vice
            distillery blue bottle butcher enamel pin synth gentrify flexitarian. Keffiyeh hoodie
            batch af kitsch, knausgaard kombucha yuccie four dollar toast. Vegan williamsburg
            book, glossier poutine pug seitan live-edge <a>my text link</a> shabby chic lomo godard
            trade skateboard. Fashion axe austin schlitz squid 8-bit. Tofu everyday carry-free,
            mumblecore hammock raclette etsy art party ethical schlitz quinoa vape.</p>
        </PreviewBox>
        <PreviewBox className="inverted" >
          <p>Gentrify air plant tilde glossier, man bun keytar next level cardigan bespoke.
            synth succulents subway tile scenester, fixie meh. Skateboard bitters next level, vice
            distillery blue bottle butcher enamel pin synth gentrify flexitarian. Keffiyeh hoodie
            batch af kitsch, knausgaard kombucha yuccie four dollar toast. Vegan williamsburg
            book, glossier poutine pug seitan live-edge <a className="link">my text link</a>
            shabby chic lomo godard trade skateboard. Fashion axe austin schlitz squid 8-bit.
            Tofu everyday carry-free, mumblecore hammock raclette etsy art party ethical
            schlitz quinoa vape.</p>
        </PreviewBox>
      </div>
    </section>
    {/* FINE PRINT */}
    <section className="container columns page-section" >
      <div className="column is-one-third" >
        <CodeSnippet language="css" >
          {fineprintStyles}
        </CodeSnippet>
      </div>
      <div className="column " >
        <PreviewBox className="center" >
          <small className="fineprint" >This is what fineprint looks like.</small>
        </PreviewBox>
        <PreviewBox>
          <small className="fineprint" >Gentrify air plant tilde glossier, man bun keytar next
            synth succulents subway tile scenester, fixie meh. Skateboard bitters next level, vice
            distillery blue bottle butcher enamel pin synth gentrify flexitarian. Keffiyeh hoodie
            batch af kitsch, knausgaard kombucha yuccie four dollar toast. Vegan williamsburg
            book, glossier poutine pug seitan live-edge shabby chic lomo godard
            trade skateboard. Fashion axe austin schlitz squid 8-bit. Tofu everyday carry-free,
            mumblecore hammock raclette etsy art party ethical schlitz quinoa vape.
          </small>
        </PreviewBox>
      </div>
    </section>
  </Page>
);

export default TypographyPage;
