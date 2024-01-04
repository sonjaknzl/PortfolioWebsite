import React, { useEffect } from "react";
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
import DetailNavbar from "./DetailNavbar";

const slides = [
  {
    image: "/assets/images/spryze-hf1.png",
    title: "Home / Dashboard",
    content:
      "Here, the social media manager discovers relevant information about ongoing or upcoming collaborations between their company and influencers. Additionally, they can explore trending influencers and challenges. Challenges serve as a platform for influencers to enhance their connection with their followers, allowing followers to vote for their favorite challenges.",
  },
  {
    image: "/assets/images/spryze-hf2.png",
    title: "Matching / Research",
    content:
      "In order to facilitate the lengthy process of researching suitable influencers for collaboration, a matching section was designed. At its core, there is a matching algorithm that pairs companies and influencers based on their interests and key metrics.",
  },
  {
    image: "/assets/images/spryze-hf3.png",
    title: "Campaign / Current status",
    content:
      "A risk factor in the planning and execution of influencer collaborations is the potential loss of overview of campaigns in the planning or execution phases. This issue is addressed through an overview page in the app, where the campaign status for each influencer is depicted for the company.",
  },
  {
    image: "/assets/images/spryze-hf5.png",
    title: "Profile / Settings",
    content:
      "In order to facilitate the (langwierigen) process of researching suitable influencers for collaboration a section for matching was konzipiert. Dem zugrunde liegt ein Matching Algorithmus der Companies und Influencer basierend auf ihren Interessen sowie Kennzahlen matched.",
  },
  {
    image: "/assets/images/spryze-hf5.png",
    title: "Chat / Communication",
    content:
      "In order to facilitate the (langwierigen) process of researching suitable influencers for collaboration a section for matching was konzipiert. Dem zugrunde liegt ein Matching Algorithmus der Companies und Influencer basierend auf ihren Interessen sowie Kennzahlen matched.",
  },
];

const DetailSpryze = ({ project, onClose }) => {
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
      <div className="relative overflow-y-auto overflow-x-hidden h-fit">
        <DetailNavbar onClose={onClose} />
        <div className="relative p-10 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem]">
          <div className="md:flex justify-between align-top">
            <div className="mt-[3rem] mb-[4rem] md:mb-0 relative z-30 md:mt-[13rem]">
              <Reveal>
                <h1 className="relative text-[4rem] xl:text-[6rem] leading-[6rem] font-bold mb-8 z-50 ">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal>
                <p className="font-bold mb-[0.2rem]">{project.category}</p>
              </Reveal>
              <Reveal>
                <p className="w-full sm:w-[28rem] md:w-[18rem] lg:w-[20rem] xl:w-[25rem] text-justify">
                  This project originated as an academic task with the central
                  theme being influencer marketing. The goal was to
                  conceptualize an app to function as a platform to strengthen
                  the bond between influencers and their followers, cooperation
                  partners or charities to collaborate with. Our focus
                  gravitated towards refining the interaction between
                  influencers and corporate entities.
                </p>
              </Reveal>
              <Reveal>
                <div className="mt-[1.5rem]">
                  <p className="font-bold">tools used</p>
                  <p className="mt-[0.2rem]">miro, figma</p>
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
                <div className="h-[15rem] md:h-auto">
                  <img src={project.imageSrc} alt={project.altText} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="relative p-10 sm:p-20 h-fit sm:h-screen mt-[3rem] md:pl-[7rem]">
          <Reveal>
            <p className="mb-8">
              After conducting market research on prevalent tools in the realm
              of influencer and corporate collaboration, a{" "}
              <span className="font-bold">customer journey</span> was
              established. <br /> During this process, the main{" "}
              <span className="font-bold"> pain points </span>
              experienced by users, specifically the social media manager in our
              scenario, were identified and documented.
            </p>
          </Reveal>
          <Reveal>
            <img
              src="/assets/images/spryze-journey.png"
              alt={project.altText}
              className="ml-auto mr-auto "
            />
          </Reveal>
        </div>
        <div className="relative p-10 sm:p-20 h-fit sm:h-screen md:pl-[7rem] xl:pl-[9rem]">
          <div className="w-fit sm:ml-auto mt-[6rem]">
            <Reveal width="w-fit">
              <h1 className="mb-8 text-[3rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5.5rem] xl:text-[9rem] xl:leading-[9rem]">
                Pain Points
              </h1>
            </Reveal>
          </div>
          <Reveal>
            <div className="flex justify-start w-full flex-wrap">
              <div className="pr-8">
                <img
                  src="/assets/images/research.jpg"
                  alt={project.altText}
                  className="w-[6rem] h-[6rem] sm:w-[10rem] sm:h-[10rem] md:w-[12rem] md:h-[12rem] xl:w-[15rem] xl:h-[15rem] object-cover mb-2"
                />
                <p className="w-[6rem] sm:w-[10rem] xl:w-[15rem] mb-6">
                  extensive research
                </p>
              </div>
              <div className="pr-8">
                <img
                  src="/assets/images/real-time.jpg"
                  alt={project.altText}
                  className="w-[6rem] h-[6rem] sm:w-[10rem] sm:h-[10rem] md:w-[12rem] md:h-[12rem] xl:w-[15rem] xl:h-[15rem] object-cover mb-2"
                />
                <p className="w-[6rem] sm:w-[10rem] xl:w-[15rem] mb-6">
                  current cooperation status
                </p>
              </div>
              <div className="pr-8 ">
                <img
                  src="/assets/images/kpis.jpg"
                  alt={project.altText}
                  className="w-[6rem] h-[6rem] sm:w-[10rem] sm:h-[10rem] md:w-[12rem] md:h-[12rem] xl:w-[15rem] xl:h-[15rem] object-cover mb-2"
                />
                <p className="w-[6rem] sm:w-[10rem] xl:w-[15rem] mb-6 ">
                  Correct follow-ups
                </p>
              </div>
              <div className="pr-8">
                <img
                  src="/assets/images/data.jpg"
                  alt={project.altText}
                  className="w-[6rem] h-[6rem] sm:w-[10rem] sm:h-[10rem] md:w-[12rem] md:h-[12rem] xl:w-[15rem] xl:h-[15rem] object-cover mb-2"
                />
                <p className="w-[6rem] sm:w-[10rem] xl:w-[15rem] mb-6">
                  data exchange
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="relative p-10 sm:p-20 h-fit mt-[10rem] md:pl-[7rem] xl:pl-[9rem]">
          <Reveal>
            <h1 className="text-[3rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] xl:text-[6rem] xl:leading-[6.5rem]">
              low fidelity
            </h1>
          </Reveal>
          <div className="mt-[2rem] flex sm:flex-row flex-col items-center">
            <Reveal>
              <img
                src="/assets/images/spryze-lowfid.png"
                alt={project.altText}
                className="w-[30rem] object-cover mb-2"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="w-full mt-[1rem] sm:w-[40vw] text-justify sm:ml-[2rem] ">
                  Building upon the identified pain points, first sketches were
                  created to address and alleviate these issues while fulfilling
                  the objectives of a collaborative partnership.
                </p>
              </Reveal>
              <Reveal>
                <p className="sm:ml-[2rem] mt-[1rem] w-full sm:w-[40vw] text-justify ">
                  Following that, the sketches were translated into a{" "}
                  <span className="font-bold"> low-fidelity prototype </span>{" "}
                  using Figma. It consisted of 5 main sections serving their
                  corresponding purposes:
                </p>
              </Reveal>
              <Reveal>
                <ul className="list-disc ml-[3rem] mt-[1rem]">
                  <li>
                    <span className="font-bold">home </span> - dashboard
                  </li>
                  <li>
                    <span className="font-bold">matching </span>- research
                  </li>
                  <li>
                    <span className="font-bold">campaign </span>- current status
                  </li>
                  <li>
                    <span className="font-bold">profile </span>- settings
                  </li>
                  <li>
                    <span className="font-bold">chat </span>- communication
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
          <div className="flex flex-col-reverse mt-[4rem] sm:mt-[8rem]">
            <Reveal>
              <div className="w-[35rem] mt-[2rem] text-justify mr-[4rem] mb-[2rem] ">
                <p>
                  Based on the low-fidelity prototype, initial{" "}
                  <span className="font-bold"> user feedback </span> on
                  user-friendliness and intuitiveness was gathered. This
                  feedback was taken into consideration for the design of the
                  high-fidelity prototype.
                </p>
              </div>
            </Reveal>
            <div className="w-fit flex">
              <Reveal width="w-fit">
                <div className="w-full flex flex-wrap">
                  <img
                    src="/assets/images/spryze-lf1.png"
                    alt={project.altText}
                    className="h-[11rem] xl:h-[20rem] mb-4 border-[0.1rem] border-gray-900 mr-4 sm:mr-8"
                  />
                  <img
                    src="/assets/images/spryze-lf2.png"
                    alt={project.altText}
                    className="h-[11rem] xl:h-[20rem] mb-4 border-[0.1rem] border-gray-900 mr-4 sm:mr-8"
                  />
                  <img
                    src="/assets/images/spryze-lf3.png"
                    alt={project.altText}
                    className="h-[11rem] xl:h-[20rem]  mb-4 border-[0.1rem] border-gray-900 mr-4 sm:mr-8"
                  />
                  <img
                    src="/assets/images/spryze-lf4.png"
                    alt={project.altText}
                    className="h-[11rem] xl:h-[20rem] mb-4 border-[0.1rem] border-gray-900 mr-4 sm:mr-8"
                  />
                  <img
                    src="/assets/images/spryze-lf5.png"
                    alt={project.altText}
                    className="h-[11rem] xl:h-[20rem] mb-4 border-[0.1rem] border-gray-900"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="relative p-10 sm:p-20 h-fit sm:pl-[7rem] xl:pt-[9rem] xl:pl-[9rem]">
          <div className="mt-[4rem]">
            <Reveal>
              <h1 className="text-[3rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] xl:text-[9rem] xl:leading-[9rem]">
                high fidelity
              </h1>
            </Reveal>
          </div>
          <div className="flex justify-center xl:justify-end mt-[2rem] xl:mt-[4rem]">
            <div className="mb-[8rem] w-full">
              <Reveal>
                <img
                  src="/assets/images/spryze-ueq.png"
                  alt={project.altText}
                  className="w-[30rem] lg:w-[45rem] xl:w-[50rem] border-none object-cover mb-2"
                />
              </Reveal>
              <Reveal>
                <p className="w-full sm:w-[30rem] lg:w-[45rem] xl:w-[50rem] mt-[2rem]">
                  Another usability test was conducted with the preliminary
                  high-fidelity prototype. A{" "}
                  <span className="font-bold">
                    UEQ (User Experience Questionnaire)
                  </span>
                  was administered on the prototype, and the results are listed
                  below. Feedback on the prototype was subsequently
                  incorporated.
                  <br />
                  <br />
                  The final designs are displayed in the caroussel below.
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal width="w-full">
            <div className="h-fit sm:h-[70vh] xl:h-[80vh] -m-[1rem]">
              <Slider {...settings} className="w-full pb-[3rem]">
                {slides.map((slide, index) => (
                  <div key={index}>
                    <div className="w-full justify-center flex flex-col sm:flex-row items-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-[24rem] sm:h-[10rem] md:h-[16rem] lg:h-[25rem] xl:h-[28rem] w-auto object-cover"
                      />
                      <div className="mt-[2rem] sm:ml-[2rem] lg:ml-[3rem] xl:ml-[5rem] lg:w-[30rem] w-full sm:w-[25rem] xl:w-[40rem]">
                        <h1 className="text-[1.2rem] sm:text-[2rem] sm:leading-[2.5rem] lg:text-[3rem] lg:leading-[3.5rem] xl:text-[4rem] xl:leading-[4.5rem]">
                          {slide.title}
                        </h1>
                        <p className="text-justify mt-[1rem] sm:mt-[2rem]">
                          {slide.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Reveal>
        </div>

        <div className="relative p-10 sm:p-20 h-screen mt-[5rem] xl:mt-[10rem] sm:pl-[7rem] xl:pl-[9rem]">
          <Reveal>
            <h1 className="text-[3rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5rem] lg:text-[7rem] lg:leading-[7rem] xl:text-[9rem] xl:leading-[9rem]">
              lessons learned
            </h1>
          </Reveal>
          <Reveal>
            <div className="ml-[2rem] sm:ml-[5rem] lg:ml-[10rem] w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] mt-[3rem]">
              <p className="font-bold">Challenges & Opportunities</p>
              <p className="mt-[0.5rem] text-justify">
                Our project encountered some challenges in the realm of time
                management and resource utilization. Balancing our workload on
                this and other projects demanded careful coordination and
                prioritization. <br />
                Recruiting participants for user testing emerged as another
                hurdle. Our commitment to maintaining the integrity of our
                target group, while avoiding repetitive use of the same test
                subjects, heightened the complexity of participant recruitment.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="ml-[2rem] sm:ml-[5rem] lg:ml-[10rem] w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem]">
              <p className="mt-[2rem] font-bold">Compromises</p>
              <p className="mt-[0.5rem] text-justify">
                While we have invested considerable time in this project,
                treating it as a real-world endeavor would necessitate
                additional refinement and a more profound focus on accessibility
                considerations. Despite this, substantial progress has been
                achieved, and the feedback gathered from user testing has proven
                to be immensely valuable.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default DetailSpryze;
