import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";

import AboutHeroBanner from "./components/AboutPage/AboutHeroBanner";
import ContactCards from "./components/Contactpage/ContactCards";
import ContactHeroBanner from "./components/Contactpage/ContactHeroBanner";
import ContactMapForm from "./components/Contactpage/ContactMapForm";
import HomeHeroBanner from "./components/Homepage/HomeHeroBanner";
import HomeServices from "./components/Homepage/HomeServices";
import ImageBanner from "./components/ImageBanner";
import PortfolioHeroBanner from "./components/Portfoliopage/PortfolioHeroBanner";

import ContactBanner from "./layouts/ContactBanner";
import LineSperator from "./layouts/LineSperator";
import Navbar from "./layouts/Navbar";
import Overlayer from "./layouts/Overlayer";
import Pagefooter from "./layouts/Pagefooter";
import PortfolioBanner from "./layouts/PortfolioBanner";
import Timeline from "./components/Timeline/Timeline";
import TimelineHeader from "./components/Timeline/TimelineHeader";
import SkillSlider from "./components/SkillSlider/SkillSlider";
import PortfolioHeader from "./components/Portfolio/PortfolioHeader";
import PortfolioGrid from "./components/Portfolio/PortfolioGrid";
import ShowcaseGrid from "./components/Showcase/ShowcaseGrid";
import ShowcasePage from "./components/SingleShowcase/ShowcasePage";
import PageNotFound from "./layouts/PageNotFound";

import WhatsAppWidget from "react-whatsapp-widget";
import "../node_modules/react-whatsapp-widget/dist/index.css";
import { Helmet } from "react-helmet";

import ReactGA from "react-ga";
import auth from "auth0-js";
import { createBrowserHistory } from "history";

function App() {
  const [timelineitems, settimelineitems] = useState([]);
  const [technology, settechnology] = useState([]);
  const [portfolios, setportfolios] = useState([]);
  const [loading, setloading] = useState(false);

  // Fetch Timeline Data
  useEffect(() => {
    const fetchTimelineItems = async () => {
      setloading(true);
      const response = await axios(
        "https://aw-personal-portfolio-default-rtdb.firebaseio.com/experiences.json"
      );

      const fetchedTimelineItems = [];
      for (let key in response.data) {
        fetchedTimelineItems.push({ ...response.data[key], id: key });
      }

      settimelineitems(fetchedTimelineItems);
      setloading(false);
    };

    fetchTimelineItems();
  }, []);

  // Fetching Technologies & Skills Data
  useEffect(() => {
    const fetchTechSkill = async () => {
      setloading(true);
      const response = await axios(
        "https://aw-personal-portfolio-default-rtdb.firebaseio.com/technologies.json"
      );

      const fetchedTechnologyItems = [];
      for (let key in response.data) {
        fetchedTechnologyItems.push({ ...response.data[key], id: key });
      }

      settechnology(fetchedTechnologyItems);
      setloading(false);
    };

    fetchTechSkill();
  }, []);

  // Fetching Portfolios
  useEffect(() => {
    const fetchPortfolios = async () => {
      setloading(true);
      const response = await axios(
        "https://aw-personal-portfolio-default-rtdb.firebaseio.com/portfolios.json"
      );

      const fetchedPortfolioItems = [];
      for (let key in response.data) {
        fetchedPortfolioItems.push({ ...response.data[key], id: key });
      }

      setportfolios(fetchedPortfolioItems);
      setloading(false);
    };

    fetchPortfolios();
  }, []);

  //

  const history = createBrowserHistory();

  const trackingID = "G-YCJWTS6KH6";
  ReactGA.initialize(trackingID);
  //   ReactGA.set({
  //     userId: auth.currentUserId(),
  //   });

  history.listen((loaction) => {
    ReactGA.set({ page: loaction.pathname });
    // eslint-disable-next-line no-restricted-globals
    ReactGA.pageview(location.pathname);
  });

  return (
    <Router history={history}>
      <Overlayer />
      <Navbar />

      <section className="container sectionPadding sectionPadding-to">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Helmet>
                  <title>Anushka Wijegoonawardana | Homepage</title>
                </Helmet>

                <HomeHeroBanner />

                <ImageBanner imgClass={"homepage"} />

                <HomeServices />

                <LineSperator />

                <section className="sectionPadding">
                  <PortfolioHeader />

                  <PortfolioGrid loading={loading} portfolios={portfolios} />
                </section>

                <ContactBanner />
              </Fragment>
            )}
          />

          <Route
            exact
            path="/about"
            render={(props) => (
              <Fragment>
                <Helmet>
                  <title>Anushka Wijegoonawardana | All About Me</title>
                </Helmet>

                <AboutHeroBanner />

                <ImageBanner imgClass={"aboutpage"} />

                <section className="sectionPadding">
                  <TimelineHeader />

                  <Timeline loading={loading} timelineitems={timelineitems} />
                </section>

                <SkillSlider
                  loading={loading}
                  technologies={technology}
                  slideRowCount={2}
                />

                <PortfolioBanner />
              </Fragment>
            )}
          />

          <Route
            exact
            path="/showcase"
            render={(props) => (
              <Fragment>
                <Helmet>
                  <title>Anushka Wijegoonawardana | The Things I Did</title>
                </Helmet>

                <PortfolioHeroBanner />

                <ShowcaseGrid loading={loading} portfolios={portfolios} />

                <ContactBanner />
              </Fragment>
            )}
          />

          <Route
            exact
            path="/showcase/:id"
            render={(props) => (
              <Fragment>
                <ShowcasePage />
                <ContactBanner />
              </Fragment>
            )}
          />

          <Route
            exact
            path="/contact"
            render={(props) => (
              <Fragment>
                <Helmet>
                  <title>Anushka Wijegoonawardana | Let's Have a Chat</title>
                </Helmet>

                <ContactHeroBanner />

                <ContactCards />

                <ContactMapForm />

                <PortfolioBanner />
              </Fragment>
            )}
          />

          <Route component={PageNotFound} />
        </Switch>

        <WhatsAppWidget
          phoneNumber="94711971313"
          message="Hello there, Just let me know what can i do for you."
          companyName="I am Anushka"
        />
        <Pagefooter />
      </section>
    </Router>
  );
}

export default App;
