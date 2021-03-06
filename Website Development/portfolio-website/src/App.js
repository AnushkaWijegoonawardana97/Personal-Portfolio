import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Overlayer from "./layouts/Overlayer";
import Pagefooter from "./layouts/Pagefooter";
import PageNotFound from "./layouts/PageNotFound";
import ReactGA from "react-ga";
import WhatsAppWidget from "react-whatsapp-widget";
import "../node_modules/react-whatsapp-widget/dist/index.css";
import Spinner from "./layouts/Spinner";

const Homepage = lazy(() => import("./layouts/Homepage"));
const Aboutpage = lazy(() => import("./layouts/Aboutpage"));
const Showcasepage = lazy(() => import("./layouts/Showcasepage"));
const Showcaseitempage = lazy(() => import("./layouts/Showcaseitempage"));
const Contactpage = lazy(() => import("./layouts/Contactpage"));

function App() {
  // Google Analitics
  useEffect(() => {
    ReactGA.initialize("UA-166326853-1");

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Overlayer />
      <Navbar />

      <section className='container sectionPadding sectionPadding-to'>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Homepage} />

            <Route exact path='/about' component={Aboutpage} />

            <Route exact path='/showcase' component={Showcasepage} />

            <Route exact path='/showcase/:id' component={Showcaseitempage} />

            <Route exact path='/contact' component={Contactpage} />

            <Route component={PageNotFound} />
          </Switch>
        </Suspense>

        <WhatsAppWidget
          phoneNumber='94711971313'
          message='Hello there, Just let me know what can i do for you.'
          companyName='I am Anushka'
        />
        <Pagefooter />
      </section>
    </Router>
  );
}

export default App;
