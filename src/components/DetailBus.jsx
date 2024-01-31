import React, { useEffect } from "react";
import DetailNavbar from "./DetailNavbar";
import { Reveal } from "./Reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./slick.css";

const DetailBus = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-custom" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-custom" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrow: false,
  };

  return (
    <div className="fixed top-0 left-0 m-0 w-screen overflow-x-hidden h-screen bg-white z-30 font-MSLight overflow-y-auto text-[0.6rem]">
      <div className="relative overflow-y-auto overflow-x-hidden h-screen">
        <DetailNavbar onClose={onClose} />
        <div className="relative p-10 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem]">
          <div className="md:flex justify-between align-top">
            <div className="mt-[3rem] mb-[4rem] md:mb-0 relative z-30 md:mt-[8rem]">
              <Reveal>
                <h1 className="relative text-[3rem] leading-[3.5rem] xl:text-[6rem] xl:leading-[6rem] font-bold mb-8 z-50 ">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal>
                <p className="font-bold mb-[0.2rem]">{project.category}</p>
              </Reveal>
              <Reveal>
                <p className="w-full sm:w-[28rem] md:w-[18rem] lg:w-[20rem] xl:w-[25rem] text-justify">
                  This research project was part of a university module in
                  groups of three people. Our group aimed to enhance tourists'
                  Sense Of Place with an Autonomous Shuttle Bus using a Virtual
                  Reality simulation. Despite providing an enhanced audio
                  experience, we observed no significant differences in Sense of
                  Place, interest, or retention compared to a baseline group.
                </p>
              </Reveal>
              <Reveal>
                <div className="mt-[1.5rem]">
                  <p className="font-bold">tools used</p>
                  <p className="mt-[0.2rem]">unity, overleaf</p>
                </div>
              </Reveal>
              <Reveal>
                <div className="mt-[1.5rem]">
                  <p className="font-bold">role</p>
                  <p className="mt-[0.2rem]">ux reseacher, ux/ ui designer</p>
                </div>
              </Reveal>
            </div>
            <div className="w-screen -ml-[2.5rem] sm:-ml-[5rem] md:w-[30rem] lg:w-[38rem] xl:w-[48rem] md:-m-[6rem]">
              <Reveal width="w-fit">
                <div className="h-auto">
                  <img src={project.imageSrc} alt={project.altText} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="relative p-10 sm:p-20 h-fit mt-[10rem] sm:pl-[7rem] xl:pl-[9rem]">
          <div className="flex justify-center">
            <Reveal>
              <h1 className="text-center text-[3rem] leading-[3.5rem] sm:text-[3rem] sm:leading-[3rem] lg:text-[3.8rem] lg:leading-[3.8rem] xl:text-[5rem] xl:leading-[5rem]">
                research question
              </h1>
            </Reveal>
          </div>
          <div className="pt-12 flex justify-center">
            <Reveal>
              <h2 className="w-[75vw] text-center text-[1rem] leading-[1.5rem] md:text-[1.5rem] md:leading-[2.5rem] lg:text-[2rem] lg:leading-[3rem] xl:text-[2.5rem] xl:leading-[3.5rem] pb-[8rem]">
                “How can <span className="underline">auditory information</span>{" "}
                provided by announcements of bus drivers in an autonomous
                shuttle bus enhance a tourist's sense of place?”
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="relative p-10 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem]">
          <Reveal width="w-full">
            <h1 className=" mb-4 text-[2.5rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5.5rem] xl:text-[8rem] xl:leading-[8rem]">
              hypothesis
            </h1>
          </Reveal>
          <Reveal>
            <p className="sm:ml-[1rem] mt-[1rem] text-justify md:w-[30rem] xl:w-[50rem]">
              Based on our research question, we formulated the following three
              hypotheses for operationalization. While the initial two
              hypotheses are designed to gather{" "}
              <span className="font-bold"> quantitative data </span>, the third
              hypothesis is structured to assess{" "}
              <span className="font-bold"> qualitative data</span>.
            </p>
          </Reveal>
          <Reveal>
            <ol className="ml-[1rem] sm:ml-[2rem] list-decimal mt-[2rem] md:w-[30rem]">
              <li className="pb-4">
                Playful and well-crafted auditory information has a positive
                effect on participants’ sense of place as compared to baseline
                bus driver announcements.
              </li>
              <li className="pb-4">
                Participants in the enhanced audio group retain facts about
                points of interests better than passengers in the baseline
                group.
              </li>
              <li>
                Participants in the enhanced audio group consider the place
                experience by well-designed audio input as more interesting and
                enjoyable.
              </li>
            </ol>
          </Reveal>
          <div className="-ml-[2.5rem] sm:-ml-[7rem] w-screen xl:-ml-[9rem] mt-[4rem] sm:mt-[8rem] mb-12">
            <Reveal width="w-screen">
              <div className="relative w-screen h-[6rem] sm:h-[10rem] overflow-hidden">
                <img
                  src="/assets/images/scenic-bus.png"
                  alt={project.altText}
                  className="object-cover -mt-[10vw] origin-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative p-8 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem]">
          <Reveal width="w-full">
            <h1 className="text-center mb-4 text-[2.5rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5.5rem] xl:text-[8rem] xl:leading-[8rem]">
              concept
            </h1>
          </Reveal>
          <Reveal width="w-full h-fit lg:h-[70vh]">
            <div>
              <Slider {...settings}>
                <div>
                  <div className="w-full h-fit md:h-[60vh] flex flex-col lg:flex-row items-center justify-center md:p-[2rem]">
                    <img
                      src="/assets/images/newyork.png"
                      alt={project.title}
                      className="w-[24rem] sm:w-[50vw] lg:w-[35vw] object-cover h-auto mb-[1rem] lg:mb-0"
                    />
                    <div className="sm:pr-[2rem] lg:w-[30rem] w-full sm:w-[50vw] xl:w-[40rem] h-auto lg:ml-[2rem]">
                      <h1 className="pt-[1rem] md:pt-0 text-[1.2rem] sm:text-[2rem] sm:leading-[2.5rem] lg:text-[2rem] lg:leading-[2.5rem] xl:text-[3rem] xl:leading-[3.5rem]">
                        vr simulation
                      </h1>
                      <p className="text-justify mt-[1rem] sm:mt-[2rem]">
                        To examine the formulated hypotheses, a virtual reality
                        simulation was developed based on the Unity software. A
                        combination of freely available and commercially
                        procured 3D assets were composed to create the scene,
                        and scripts for the simulation were written internally.
                        <br />
                        <br />
                        The selection of this specific city model representing
                        New York was deliberate, given its expansive dimensions
                        accommodating various points of interest, substantial
                        road space for navigation, and no performance compromise
                        stemming from excessively high resolution.
                      </p>
                      <div className="h-[1.75rem] mt-[1rem] opacity-50 flex">
                        <img
                          src="/assets/images/csharp.png"
                          alt={project.altText}
                          className="h-full grayscale mr-[1rem]"
                        />
                        <img
                          src="/assets/images/unity.png"
                          alt={project.altText}
                          className="h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-full h-fit lg:h-[60vh] flex flex-col lg:flex-row items-center justify-center md:p-[2rem]">
                    <div className="sm:pr-[2rem] lg:mr-[3rem] lg:w-[30rem] w-full sm:w-[50vw] xl:w-[40rem] h-auto">
                      <h1 className="text-[1.2rem] sm:text-[2rem] sm:leading-[2.5rem] lg:text-[2rem] lg:leading-[2.5rem] xl:text-[3rem] xl:leading-[3.5rem]">
                        route and pois
                      </h1>
                      <p className="text-justify mt-[1rem] sm:mt-[2rem]">
                        Considerations for the route planning and selections of
                        the points of interests of the autonomous bus included
                        the proximity of three points of interests towards one
                        another and the depiction of the point of interest
                        within the 3D model as we aimed to keep the simulation
                        as realistic as possible.
                        <br />
                        <br />
                        The chosen route connected and introduced the following
                        points of interests auditively:
                        <ol className="ml-[1rem] mt-[0.5rem] list-decimal ">
                          <li>Heckscher Playground</li>
                          <li>Carnegie Hall</li>
                          <li>Museum of Modern Art</li>
                        </ol>
                      </p>
                    </div>
                    <img
                      src="/assets/images/ny-map.png"
                      alt={project.title}
                      className="mt-[1rem] lg:mt-0 w-[24rem] sm:w-[50vw] md:w-[50vw] lg:w-[35vw] h-full md:object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full h-fit md:h-[60vh] flex flex-col items-center justify-center md:p-[2rem] ">
                    <h1 className="text-[1rem] sm:text-[2rem] sm:leading-[2.5rem] lg:text-[2rem] lg:leading-[2.5rem] xl:text-[3rem] xl:leading-[3.5rem]">
                      auditory concept
                    </h1>
                    <p className="md:w-[50vw] text-center mt-[1rem]">
                      In order to test the developed hypotheses two auditory
                      concepts of bus driver announcements were created. For
                      each point of interest two variants of the bus driver
                      announcements were recorded to be tested on two different
                      groups. The announcements were to be played when the bus
                      stops at the respective Point of Interest.
                    </p>
                    <div className="w-full flex flex-col lg:flex-row justify-around mt-[3rem] text-center">
                      <div>
                        <h2 className=" text-[0.8rem] md:text-[1rem]">
                          V1: Playful Announcements
                        </h2>
                        <p className="lg:w-[25rem] mt-[0.5rem] pb-[2rem]">
                          The playful announcements were designed to consist of:
                          <br />
                          <span className="font-bold">
                            earcon + speech + auditory icon + speach
                          </span>
                        </p>
                      </div>
                      <div>
                        <h2 className="text-[0.8rem] md:text-[1rem]">
                          V2: Baseline Announcements
                        </h2>
                        <p className="lg:w-[25rem] mt-[0.5rem]">
                          The baseline announcements were designed to consist
                          of:
                          <br />
                          <span className="font-bold">earcon + speech</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Reveal>
        </div>
        <div className="relative p-10 sm:p-20 h-fit sm:mt-[8rem] sm:pl-[7rem] xl:pl-[9rem] ">
          <Reveal>
            <h1 className="text-center text-[2rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3rem] lg:text-[3.8rem] lg:leading-[3.8rem] xl:text-[5rem] xl:leading-[5rem]">
              methodology
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-[1rem] w-full md:w-[50vw] text-justify">
              The result of the operationalization of the hypotheses was a
              questionnaire to gather qualitative and quantiative data from the
              participants. For the quantitative data we chose a mix between
              already established questionnaires and our own self-developed
              questionnaire to specifically address the field of sense of place.
            </p>
          </Reveal>
          <div className="flex flex-col lg:flex-row justify-between w-full md:w-[50vw] mt-[2rem]">
            <div>
              <Reveal>
                <p className="text-[1rem]">quantitative data</p>
              </Reveal>
              <Reveal>
                <ol className="ml-[1rem] mt-[0.5rem] list-decimal ">
                  <li>Interest Questionnaire (IMI)</li>
                  <li>Self-developed Sense of Place Questionnaire</li>
                  <li>Retention Test</li>
                </ol>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <p className="text-[1rem] mt-[1rem] lg:mt-0">
                  qualitative data - open questions
                </p>
              </Reveal>
              <Reveal>
                <ol className="ml-[1rem] mt-[0.5rem] list-decimal ">
                  <li>Which points of interests do you remember?</li>
                  <li>What did you see on your journey?</li>
                  <li>What did you learn on your journey?</li>
                  <li>Is there anything else you would like to add?</li>
                </ol>
              </Reveal>
            </div>
          </div>
          <div className="-ml-[2.5rem] sm:-ml-[7rem] w-screen xl:-ml-[9rem] mt-[4rem] mb-12">
            <Reveal width="w-screen">
              <div className="relative w-screen h-[6rem] sm:h-[10rem] overflow-hidden">
                <img
                  src="/assets/images/scenic-bus.png"
                  alt={project.altText}
                  className="object-cover -mt-[50vw] origin-center"
                />
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="mt-[3rem] w-full text-justify sm:text-center">
              Furthermore a testing plan was created to ensure a smooth process
              and keep researcher's bias low. <br />
              The testing process was to start with a short introduction to the
              project and the equipment and the signing of an agreement form.
              Then the participant was to be randomly assigned to either the
              enhanced audio group or control group. Afterwards the simulation
              was to be presented to the participant using a HTC VIVE and
              finally the participant was to fill out the questionnaire and have
              a short debriefing with the researchers.
            </p>
          </Reveal>
        </div>
        <div className="relative p-10 sm:p-20 h-fit sm:pl-[7rem] xl:pl-[9rem] mt-[8rem] ">
          <Reveal width="w-full">
            <h1 className=" mb-4 text-[2.5rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5.5rem] xl:text-[7rem] xl:leading-[7rem]">
              results
            </h1>
          </Reveal>
          <Reveal>
            <p className="lg:ml-[1rem] w-full sm:w-[70vw] lg:w-full mt-[1rem] sm:mt-[2rem] text-justify">
              We analyzed our data with the software JASP. We used t-tests to
              test our hypotheses and choose a 95% as a confidence interval.
              <br />
              Overall, we collected{" "}
              <span className="font-bold">31 usable data sets</span>.
            </p>
          </Reveal>
          <div className="flex flex-col lg:flex-row justify-between w-full lg:items-center mt-[4rem] ">
            <div className="lg:ml-[1rem] w-full sm:w-[70vw] lg:w-[50vw] text-justify ">
              <Reveal>
                <div className="">
                  <p className="font-bold">
                    1. Playful and well-crafted auditory information has a
                    positive effect on participants’ sense of place as compared
                    to baseline bus driver announcements.
                  </p>
                  <p className="mt-[0.3rem]">
                    We found no significant difference in experienced sense of
                    place between the groups as measured by our scale. However,
                    we found a medium-sized effect size (Cohen's d = -.5) in
                    favor of the enhanced audio group. <br />A single question
                    in the questionnaire signaled a significantly enhanced
                    feeling of place in the enhanced audio group. This question
                    related specifically to the sights and may be translated as
                    "I feel a bond to the point of interest I have seen".
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="mt-[2rem] ">
                  <p className="font-bold">
                    2. Participants in the enhanced audio group retain facts
                    about points of interests better than passengers in the
                    baseline group.
                  </p>
                  <p className="mt-[0.3rem]">
                    Similarly to our sense of place scale, our retention test
                    yielded a medium effect size, but no significant difference
                    between groups.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="mt-[2rem]">
                  <p className="font-bold">
                    3. Participants in the enhanced audio group consider the
                    place experience by well-designed audio input as more
                    interesting and enjoyable.
                  </p>
                  <p className="mt-[0.3rem]">
                    Our interestingness scale yielded a mean of 27.94 (SD =
                    3.75), which translates to an average interest rating of
                    3.99 per item, as projected on a Likert scale from one to
                    five. However, no significant difference between groups
                    could be found.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <div className="h-[13rem] lg:h-auto overflow-hidden sm:w-[70vw] lg:w-[30vw] lg:ml-[2rem] mt-[2rem] lg:mt-0">
                <img
                  src="/assets/images/vrbrille.jpg"
                  alt={project.altText}
                  className="w-full object-cover -mt-[20vw] lg:mt-0 origin-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative p-10 sm:p-20 h-fit mt-[5rem] xl:mt-[10rem] sm:pl-[7rem] xl:pl-[9rem]">
          <Reveal>
            <h1 className="text-[3rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5rem] lg:text-[7rem] lg:leading-[7rem] xl:text-[9rem] xl:leading-[9rem]">
              lessons learned
            </h1>
          </Reveal>
          <Reveal>
            <div className="w-full ml-0 sm:ml-[5rem] lg:ml-[10rem] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] mt-[3rem]">
              <p className="font-bold">Conclusion & Explanations</p>
              <p className="mt-[0.5rem] text-justify">
                We cannot support any of our three hypotheses with the results
                we found. The measurements we employed did not yield significant
                results in regards to the constructs sense of place,
                learning/retention, or interestingness. <br />
                Possible influences could consist of the difficulty of building
                a sense of place and its needed time frame, bus rides not
                sufficing for that purpose or soundscapes/ bus driver
                announcements not being appropriate mediums for the task.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="ml-0 sm:ml-[5rem] lg:ml-[10rem] w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem]">
              <p className="mt-[2rem] font-bold">Sample Size</p>
              <p className="mt-[0.5rem] text-justify">
                We acknowledge that our participants were mainly recruited from
                a German university leading to limited universal applicability.
                Furthermore, many of our results point to a lack of statistical
                power, which may be due to small sample size. <br />
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="ml-0 sm:ml-[5rem] lg:ml-[10rem] w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem]">
              <p className="mt-[2rem] font-bold">Further research</p>
              <p className="mt-[0.5rem] text-justify">
                Overall, we think that our approach holds the potential to aid
                in the design of wholesome tourist experiences with autonomous
                shuttle buses and recommend that similar studies in the future
                attempt to improve extrinsic validity by positioning themselves
                closer to the reality experienced by the tourist. Theoretical
                studies exploring the intricate relationships between place,
                tourism, interest, and learning will also help in designing
                better tourism concepts.
              </p>
            </div>
          </Reveal>
          <div className="-ml-[2.5rem] sm:-ml-[7rem] w-screen xl:-ml-[9rem] mt-[5rem] -mb-20">
            <Reveal width="w-screen">
              <div className="relative w-screen h-[6rem] sm:h-[10rem] overflow-hidden">
                <img
                  src="/assets/images/scenic-bus.png"
                  alt={project.altText}
                  className="object-cover origin-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailBus;
