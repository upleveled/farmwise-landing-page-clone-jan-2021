/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import bgGreenTransition from './images/bg-green-transition.svg';
import callout from './images/callout.png';
import coverTestimony from './images/cover-testimony1.jpg';
import cover10 from './images/cover10.jpg';
import cover11 from './images/cover11.jpg';
import cover4 from './images/cover4.jpg';
import cover9 from './images/cover9.jpg';
import fieldFull from './images/field-full.png';
import growerMason from './images/grower-mason.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import logoForbes from './images/logo-forbes-200x50.png';
import logoTechcrunch from './images/logo-techcrunch-200x50.png';
import logo from './images/logo_large_white.svg';
import map from './images/map.png';
import plantLarge from './images/plant-large.png';
import plantSmall from './images/plant-small.png';
import shape10 from './images/shapes10.svg';
import shape2 from './images/shapes2.svg';
import shape3 from './images/shapes3.svg';
import shape6 from './images/shapes6.svg';
import shape8 from './images/shapes8.svg';
import shape9 from './images/shapes9.svg';
import twitter from './images/twitter.png';
import youtube from './images/youtube.png';

const teal = '#2E6764';
const orange = '#ff9869';

const pageHorizontalMargin = '25px';

const headerStyles = css`
  display: flex;
  align-items: center;
  background-color: ${teal};
  color: #fff;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;

  h1 {
    margin: 0 auto 0 ${pageHorizontalMargin};
    line-height: 60px;

    img {
      display: block;
      margin-top: 5px;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 0 30px;
    line-height: 60px;
    font-weight: bold;
    border-bottom: 2px solid transparent;

    &:not(:last-child):hover {
      border-bottom: 2px solid #fff;
    }

    &:last-child {
      background-color: ${orange};
      color: #103e41;
    }
  }
`;

const sectionGeneralStyles = css`
  padding-left: ${pageHorizontalMargin};
  padding-right: ${pageHorizontalMargin};
`;

const sectionOneStyles = css`
  background-color: ${teal};
  color: #fff;
  padding-top: 100px;
  padding-bottom: 400px;

  h1 {
    text-transform: uppercase;
    font-size: 12.5px;
    font-weight: 800;
    letter-spacing: 0.7px;
    color: #84f7d2;
    margin: 0 0 48px;
  }

  p {
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -0.4px;
    line-height: 1.27;
    width: 70%;
    margin: 0 0 48px;
  }

  button {
    line-height: 50px;
    border: 2px solid #fff;
    border-radius: 30px;
    color: #fff;
    font-size: 14px;
    font-weight: 900;
    padding: 0 40px;
    background: transparent;
  }
`;

const plantInFieldDiagram = css`
  position: absolute;
  width: calc(100% - (${pageHorizontalMargin} * 2));

  img:nth-child(1) {
    position: absolute;
    z-index: 2;
    top: -100px;
    right: 90px;
    width: 240px;
  }

  img:nth-child(2) {
    position: absolute;
    z-index: 1;
    top: 40px;
    right: 220px;
    width: 106px;
  }

  img:nth-child(3) {
    position: absolute;
    top: 80px;
    left: 10px;
    width: 800px;
  }
`;

const pill = css`
  position: absolute;
  z-index: 3;
  font-size: 11.5px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 28px;
  padding: 0 14px;
  border-radius: 14px;
  color: #103e41;

  i {
    margin: 0 0 0 2px;
    display: inline-block;
    width: 0.83em;
    height: 0.9em;
    background-color: #fff;
    border-radius: 50%;

    &.dotLeft {
      margin: 0 2px 0 0;
    }
  }
`;

const pillOrange = css`
  background-color: ${orange};
  top: -1px;
  left: 469px;
`;
const pillGreen = css`
  background-color: #6dedbe;
  top: -48px;
  right: 87px;
`;
const pillYellow = css`
  background-color: #ffd976;
  top: 52px;
  right: 72px;
`;

function App() {
  return (
    <div>
      <header css={headerStyles}>
        <h1>
          <img src={logo} alt="FarmWise" />
        </h1>
        <a href="#1">About</a>
        <a href="#1">Services</a>
        <a href="#1">Careers</a>
        <a href="#1">Customer login</a>
      </header>

      <section
        css={css`
          ${sectionGeneralStyles}
          ${sectionOneStyles}
        `}
      >
        <h1>Feeding our world and our future</h1>
        <p>
          We build innovative systems and processes that allow farmers to
          streamline operations and increase food production efficiency.
        </p>

        <button>Watch the video</button>

        <div css={plantInFieldDiagram}>
          <img src={plantSmall} alt="" />
          <img src={callout} alt="" />
          <img src={fieldFull} alt="" />
          <div
            css={css`
              ${pill}
              ${pillOrange}
            `}
          >
            Size: 5 <i />
          </div>
          <div
            css={css`
              ${pill}
              ${pillGreen}
            `}
          >
            <i className="dotLeft" /> Plant ID: 16
          </div>
          <div
            css={css`
              ${pill}
              ${pillYellow}
            `}
          >
            <i className="dotLeft" /> Stress: 75%
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1>We proudly work with the most innovative growers</h1>
          <p>
            “I believe in the FarmWise technology and in the potential of their
            team beyond weeding. I'm convinced there's an increasing need for
            technology on the farm that FarmWise can fill.”
          </p>
          <div>
            <img src={growerMason} alt="" />
            <h2>Mark Mason</h2>
            <div>Farm Input Manager</div>
            <div>Huntington Farms</div>
          </div>

          <div>
            <a href="#1">←</a>1 / 5<a href="#1">→</a>
          </div>
        </div>
        <img src={coverTestimony} alt="" />
      </section>

      <section>
        <div>
          <img src={shape2} alt="" />
          <img src={plantLarge} alt="" />
          <img src={shape3} alt="" />
          <div>STRESS: 75%</div>
          <div>SIZE: 5</div>
        </div>
        <div>
          <h1>Services</h1>
          <p>
            FarmWise leverages state-of-the-art technologies to perform
            plant-level interventions. Automating the weeding process in
            vegetables is our initial step.
          </p>
          <a href="#1">Learn more</a>
        </div>
      </section>

      <section>
        <img src={shape6} alt="" />

        <div>
          <h1>Latest news</h1>
          <a href="#1">Follow FarmWise on Medium →</a>
        </div>

        <div>
          <img src={cover9} alt="" />
          <div>
            <h2>FarmWise selected for TIME's 2020 Best Inventions</h2>
            <p>
              The FarmWise Titan FT-35 is a driverless tractor that uses machine
              learning and computer vision, rather than herbicides, to eradicate
              weeds from farmers' fields.
            </p>
            <a href="#1">View article →</a>
          </div>
        </div>

        <div>
          <img src={cover10} alt="" />
          <div>
            <h2>
              Robotic weed removal eliminates need for expensive hand crews
            </h2>
            <p>
              FarmWise offers a business model that provides weeding services,
              freeing the grower from having to own and maintain a machine.
            </p>
            <a href="#1">View article →</a>
          </div>
        </div>

        <div>
          <img src={cover11} alt="" />
          <div>
            <h2>
              How technology might finally start telling farmers things they
              didn’t already know
            </h2>
            <p>
              A subset of companies, like FarmWise, are working on something
              akin to hand-eye coordination, chasing the perennial goal of
              automating the most labor-intensive stages of fruit and vegetable
              farming.
            </p>
            <a href="#1">View article →</a>
          </div>
        </div>

        <div>
          <img src={cover4} alt="" />
          <div>
            <h2>
              Salinas company FarmWise has weeder on Time’s list of Best
              Inventions of 2020
            </h2>
            <p>
              A behemoth of a worker, recently recognized by a national
              publication, that can meticulously and precisely remove weeds
              growing between sprouting crops is being employed on farms in
              California and Arizona.
            </p>
            <a href="#1">View article →</a>
          </div>
        </div>

        <img src={shape8} alt="" />
      </section>

      <section>
        <img src={shape9} alt="" />

        <h1>As seen on</h1>
        <div>
          <a href="#1">←</a>
          <div>
            <img src={logoTechcrunch} alt="" />
            <p>
              "FarmWise raised quite a bit of money last year to expand from
              autonomous weed-pulling to a full-featured plant intelligence
              platform"
            </p>
            <a href="#1">View article</a>
          </div>
          <div>
            <img src={logoForbes} alt="" />
            <p>"Weed bots such as FarmWise can physically remove the weed"</p>
            <a href="#1">View article</a>
          </div>
          <a href="#1">→</a>
        </div>

        <img src={shape10} alt="" />
      </section>

      <section>
        <img src={bgGreenTransition} alt="" />
        <h1>Find out if our services are available next to you</h1>
        <img src={map} alt="map" />
        <div>
          <div>Available</div>
          <div>Available soon</div>
        </div>
        <p>
          Interested, but not available in your area?
          <br />
          Please contact us at <a href="#1">contact@farmwise.io</a>
        </p>
      </section>

      <footer>
        <div>
          <div>FarmWise</div>
          <div>
            <a href="#1">contact@farmwise.io</a>
            <p>
              1231 Connecticut Street
              <br />
              San Francisco, CA 94107
            </p>
            <p>
              1037 Abbott St
              <br />
              Salinas, CA 93901
            </p>
          </div>
          <div>
            <a href="#1">About</a>
            <a href="#1">Services</a>
            <a href="#1">Careers</a>
          </div>
        </div>
        <div>
          <div>
            <a href="#1">
              <img src={twitter} alt="" />
            </a>
            <a href="#1">
              <img src={linkedin} alt="" />
            </a>
            <a href="#1">
              <img src={instagram} alt="" />
            </a>
            <a href="#1">
              <img src={youtube} alt="" />
            </a>
          </div>
          <div>
            <strong>FEEDING OUR WORLD AND OUR FUTURE</strong>© 2020 — FarmWise
            Labs, Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
