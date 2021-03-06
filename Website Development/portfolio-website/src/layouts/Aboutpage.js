import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import AboutHeroBanner from "../components/AboutPage/AboutHeroBanner";
import ImageBanner from "../components/ImageBanner";
import SkillSlider from "../components/SkillSlider/SkillSlider";
import Timeline from "../components/Timeline/Timeline";
import TimelineHeader from "../components/Timeline/TimelineHeader";
import PortfolioBanner from "./PortfolioBanner";

function Aboutpage() {
  const [timelineitems, settimelineitems] = useState([]);
  const [technology, settechnology] = useState([]);
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
  return (
    <Fragment>
      <AboutHeroBanner />
      <ImageBanner imgClass={"aboutpage"} />
      <section className='sectionPadding'>
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
  );
}

export default Aboutpage;
