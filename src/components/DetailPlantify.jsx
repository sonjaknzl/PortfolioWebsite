import React, { useEffect } from "react";
import DetailNavbar from "./DetailNavbar";
import { Reveal } from "./Reveal";

const DetailPlantify = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 m-0 w-screen overflow-x-hidden h-screen bg-white z-30 font-MSLight overflow-y-auto text-[0.6rem]">
      <div className="relative overflow-y-auto overflow-x-hidden h-screen">
        <DetailNavbar onClose={onClose} />
        <div className="relative p-10 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem]">
          <div className="md:flex justify-between align-top">
            <div className="mt-[3rem] mb-[4rem] md:mb-0 relative z-30 md:mt-[13rem] lg:mt-[10rem]">
              <Reveal>
                <h1 className="relative text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-[6rem] font-bold mb-4 sm:mb-8 z-50 ">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal>
                <p className="font-bold mb-[0.2rem]">{project.category}</p>
              </Reveal>
              <Reveal>
                <p className="w-full sm:w-[28rem] md:w-[18rem] lg:w-[20rem] xl:w-[25rem] text-justify">
                  This project required the conceptualisation and development of
                  a CRUD application in Android Studio under implementation of
                  given specifications. The final concept revolved around the
                  implementation of a digital plant encyclopedia/ diary. Within
                  the application, users are able to monitor their houseplants
                  and their irrigation status.
                </p>
              </Reveal>
              <Reveal>
                <div className="mt-[1.5rem]">
                  <p className="font-bold">software/ tools used</p>
                  <p className="mt-[0.2rem]">
                    figma, android studio, github, kotlin, sqlite
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="mt-[1.5rem]">
                  <p className="font-bold">role</p>
                  <p className="mt-[0.2rem]">
                    ux/ ui designer, software developer
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="w-screen -ml-[2.5rem] sm:-ml-[5rem] md:w-[30rem] lg:w-[38rem] xl:w-[48rem] md:-m-[6rem]">
              <Reveal width="w-fit ">
                <div className="h-[15rem] md:h-auto">
                  <img src={project.imageSrc} alt={project.altText} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="relative p-10 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem]">
          <Reveal width="w-full">
            <h1 className="mt-[4rem] mb-8 text-[3rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5.5rem] xl:text-[8rem] xl:leading-[8rem] text-right">
              Ideation
            </h1>
          </Reveal>
          <Reveal width="w-full">
            <p className="pb-[8rem] w-full sm:w-[40rem] ml-auto text-justify">
              The first primary objective was to identify a relevant challenge
              that could be effectively addressed through application
              development.In a brainstorming session, the idea emerged to create
              an app focused on managing houseplants. A key feature of the
              envisioned concept was intelligent reminders tailored to the
              unique watering needs of each plant species. This approach
              reflects a dedication to enhancing user experience through a
              purposeful and user-friendly application.
            </p>
          </Reveal>
          <div className="-ml-[2.5rem] sm:-ml-[7rem] w-screen xl:-ml-[9rem]">
            <Reveal width="w-screen">
              <div className="relative w-screen h-[10rem] overflow-hidden">
                <img
                  src="/assets/images/plant.jpg"
                  alt={project.altText}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative p-10 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem]">
          <Reveal width="w-full">
            <h1 className=" mb-4 text-[2.5rem] eading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5.5rem] xl:text-[8rem] xl:leading-[8rem]">
              ux drafts
            </h1>
          </Reveal>
          <Reveal>
            <p className="sm:ml-[1rem] w-full sm:w-[25rem] mt-[1rem] sm:mt-[2rem] text-justify">
              After the ideation a first drafts of screen designs were created.
              They incororated the following views:
            </p>
          </Reveal>
          <Reveal>
            <ul className="ml-[1rem] sm:ml-[2rem] w-[25rem] list-disc mt-[1rem]">
              <li>
                <span className="font-bold">home </span> - dashboard
              </li>
              <li>
                <span className="font-bold">new entry </span>- create new plant
              </li>
              <li>
                <span className="font-bold">upcoming tasks </span>- reminder
                list
              </li>
              <li>
                <span className="font-bold">edit entry </span>- edit plant data
              </li>
            </ul>
          </Reveal>
          <div className="flex justify-center flex-col items-center ">
            <Reveal width="w-full h-fit">
              <div className="w-full h-fit flex flex-wrap sm:flex-nowrap justify-around sm:h-[25rem] mt-[4rem]">
                <img
                  src="/assets/images/plantify-lf1.png"
                  alt={project.altText}
                  className="w-[7rem] sm:w-auto border-[0.1rem] border-gray-900"
                />
                <img
                  src="/assets/images/plantify-lf2.png"
                  alt={project.altText}
                  className="w-[7rem] sm:w-auto border-[0.1rem] border-gray-900"
                />
                <img
                  src="/assets/images/plantify-lf3.png"
                  alt={project.altText}
                  className="mt-[2rem] sm:mt-0 w-[7rem] sm:w-auto border-[0.1rem] border-gray-900"
                />
                <img
                  src="/assets/images/plantify-lf4.png"
                  alt={project.altText}
                  className="mt-[2rem] sm:mt-0 w-[7rem] sm:w-auto  border-[0.1rem] border-gray-900"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative p-10 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem] mt-[6rem]">
          <div className="flex sm:flex-row flex-col-reverse">
            <Reveal width="mt-[2.5rem] sm:mt-0 w-fit">
              <img
                src="/assets/images/plantify-dataclass.png"
                alt={project.altText}
                className="w-[30rem]"
              />
            </Reveal>
            <div className="lg:ml-[4rem] sm:ml-[2rem]">
              <Reveal width="w-full">
                <h1 className="mb-4 text-[3rem] leading-[3.5rem] sm:text-[4rem] sm:leading-[4.5rem] lg:text-[5rem] lg:leading-[5.5rem] ">
                  data class
                </h1>
              </Reveal>
              <Reveal>
                <p className="w-full sm:w-[20rem] md:w-[20rem] lg:w-[30rem] ml-[0.5rem] text-justify">
                  A basic data class of the plant entity to be displayed in the
                  app was created. When creating a plant the user needs to
                  register a name, species, the date when the plant was
                  purchased and the date the plant was last watered.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="relative p-10 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem] mt-[4rem]">
          <div className="flex flex-col sm:flex-row items-center">
            <Reveal>
              <img
                src="/assets/images/plantify-struc.png"
                alt={project.altText}
                className="w-[40rem]"
              />
            </Reveal>
            <Reveal width="w-fit lg:ml-[4rem] sm:ml-[2rem] text-justify">
              <p className="mt-[2rem] w-full sm:w-[25rem]">
                This app structure was developed. The main view controller
                consists of the navigation controller, which is part of the
                navigation drawer. From here, the user can navigate to the
                'home,' 'todo,' and 'settings' pages. <br />
                <br />
                In the 'home' fragment, new entries can be created or existing
                entries can be edited.
              </p>
            </Reveal>
          </div>
          <Reveal width="w-full">
            <h1 className="mt-[2rem] mb-[4rem] text-[2.5rem] leading-[3rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5.5rem] xl:text-[8rem] xl:leading-[8rem]">
              app structure
            </h1>
          </Reveal>
        </div>
        <div className="relative p-10 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem] mt-[4rem]">
          <Reveal width="w-full">
            <h1 className=" mt-[8rem] text-[2.4rem] leading-[2.9rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5.5rem] ">
              databases & csv files
            </h1>
          </Reveal>
          <div className="flex flex-col sm:flex-row mt-[2rem]">
            <Reveal>
              <img
                src="/assets/images/plantify-csv.png"
                alt={project.altText}
                className="w-full sm:w-[40rem] h-auto"
              />
            </Reveal>
            <Reveal>
              <img
                src="/assets/images/plantify-db.png"
                alt={project.altText}
                className="w-full sm:w-[30rem] mt-[2rem] sm:mt-0 sm:ml-[2rem] h-auto"
              />
            </Reveal>
          </div>
          <Reveal>
            <p className="mt-[2rem] w-full sm:w-[30rem] text-justify">
              Two databses were generated. One inhabitating data read from a csv
              file containing various types of species and their corresponding
              information and their optimal watering interval data. <br />
              The second database was created to store the entities created by
              the user.
            </p>
          </Reveal>
        </div>
        <div className="relative p-10 sm:p-20 h-fit md:pl-[7rem] xl:pl-[9rem] mt-[4rem]">
          <Reveal width="w-full">
            <h1 className="mt-[8rem] text-[2.5rem] leading-[3rem] sm:text-[4rem] sm:leading-[4.5rem] md:text-[5rem] md:leading-[5.5rem]">
              high fidelity
            </h1>
          </Reveal>
          <div className="flex w-full sm:flex-row flex-col mt-[2rem]">
            <div className="w-fit">
              <Reveal>
                <p className="w-full sm:w-[20rem] lg:w-[30rem] xl:w-[40rem] text-justify">
                  Some of the ui patterns implemented in the app included:
                </p>
              </Reveal>
              <Reveal>
                <ul className="ml-[2rem] list-disc mt-[1rem]">
                  <li>Hamburger/ Drawer Navigation</li>
                  <li>Visual Hierarchy</li>
                  <li>Icons</li>
                  <li>Expandable Information</li>
                  <li>Swipe to delete</li>
                  <li>Error Prevention</li>
                  <li>Error Checking</li>
                  <li>Toasts for user feedback</li>
                </ul>
              </Reveal>
            </div>

            <div className="mt-[2rem] sm:mt-0 w-full lg:w-[40rem] xl:w-[50rem] flex justify-around sm:justify-end">
              <Reveal width="w-fit">
                <img
                  src="/assets/images/plantify2.png"
                  alt={project.altText}
                  className="w-[7rem] h-auto lg:w-[10rem] xl:w-[12rem] sm:mr-[3rem]"
                />
              </Reveal>
              <Reveal width="w-fit">
                <img
                  src="/assets/images/plantify1.png"
                  alt={project.altText}
                  className="w-[7rem] h-auto lg:w-[10rem] xl:w-[12rem]"
                />
              </Reveal>
            </div>
          </div>
          <div className="flex flex-row justify-between sm:justify-start mt-[3rem] sm:mt-[5rem]">
            <Reveal width="w-fit">
              <img
                src="/assets/images/plantify3.png"
                alt={project.altText}
                className="w-[6rem] sm:w-[7rem] lg:w-[10rem] xl:w-[12rem] sm:mr-[3rem]"
              />
            </Reveal>
            <Reveal width="w-fit">
              <img
                src="/assets/images/plantify4.png"
                alt={project.altText}
                className="w-[6rem] sm:w-[7rem] lg:w-[10rem] xl:w-[12rem] sm:mr-[3rem]"
              />
            </Reveal>
            <Reveal width="w-fit">
              <img
                src="/assets/images/plantify5.png"
                alt={project.altText}
                className="w-[6rem] sm:w-[7rem] lg:w-[10rem] xl:w-[12rem]"
              />
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
              <p className="font-bold">Challenges & Opportunities</p>
              <p className="mt-[0.5rem] text-justify">
                This project encountered some challenges in the realm of time
                management as well as it was only created in the timeframe of 10
                weeks while also working through learning materials, write
                progress reports and research best practices.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="ml-0 sm:ml-[5rem] lg:ml-[10rem] w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem]">
              <p className="mt-[2rem] font-bold">Outlook</p>
              <p className="mt-[0.5rem] text-justify">
                Additional features for the app could include: Implementing
                notifications to remind the user when a plant needs watering or
                instead of switching from ToDoFragment to HomeFragment after
                watering a plant, the app could stay in ToDoFragment and push
                the watered entry down to the 'Later' list.
              </p>
            </div>
          </Reveal>
          <div className="-ml-[2.5rem] sm:-ml-[7rem] w-screen xl:-ml-[9rem] mt-[6rem] -mb-20 ">
            <Reveal width="w-screen">
              <div className="relative w-screen sm:h-[10rem] overflow-hidden">
                <img
                  src="/assets/images/plant.jpg"
                  alt={project.altText}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPlantify;
