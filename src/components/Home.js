import React from "react";
import Faq from "./Faq";
import News from "./News";
import Pricing from "./Pricing";
function Home() {
  return (
    <div>
      <div className="bg-cream">
        <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
          {/*Left Col*/}
          <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              className="my-4 text-5xl font-bold leading-tight text-darken"
            >
              <span className="text-yellow-500">Simplify workflows, Automate tasks</span>  and Optimize your school’s performance.

            </h1>
            <p data-aos="fade-down" 
            data-aos-once="true" 
            data-aos-delay="300" 
            class="leading-normal text-2xl mb-8">
              The only <span className="text-yellow-500">software</span> you need to run your <span className="text-yellow-500">school.</span></p>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={700}
              className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
            >
              <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              <form className="banner-one__mc-form mc-form" data-url="MAILCHIMP__POPUP__FORM__URL">
        <input type="text" name="email" placeholder="Email address" />
        <button type="submit" className="thm-btn banner-one__mc-btn"><span>Free
            Trial</span></button>{/* /.thm-btn banner-one__mc-btn */}
      </form>
              </div>
            </div>
          </div>
          {/*Right Col*/}
          <div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              className="w-10/12 mx-auto 2xl:-mb-20"
              src="img/girl.png"
            />
            {/* calendar */}
            <div
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-once="true"
              className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="img/calendar.svg"
              />
            </div>
            {/* red */}
            <div
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-once="true"
              className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
            >
              <svg
                className="h-16 sm:h-24"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <rect
                    x={40}
                    y={32}
                    width={69}
                    height={69}
                    rx={14}
                    fill="#F3627C"
                  />
                </g>
                <rect
                  x="51.35"
                  y="44.075"
                  width="47.3"
                  height="44.85"
                  rx={8}
                  fill="white"
                />
                <path
                  d="M74.5 54.425V78.575"
                  stroke="#F25471"
                  strokeWidth={4}
                  strokeLinecap="round"
                />
                <path
                  d="M65.875 58.7375L65.875 78.575"
                  stroke="#F25471"
                  strokeWidth={4}
                  strokeLinecap="round"
                />
                <path
                  d="M83.125 63.9125V78.575"
                  stroke="#F25471"
                  strokeWidth={4}
                  strokeLinecap="round"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x={0}
                    y={0}
                    width={149}
                    height={149}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy={8} />
                    <feGaussianBlur stdDeviation={20} />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* ux class */}
            <div
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-once="true"
              className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28"
                src="img/ux-class.svg"
                alt=""
              />
            </div>
            {/* congrats */}
            <div
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-once="true"
              className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="img/congrat.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
          <svg
            className="xl:h-40 xl:w-full"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              fill="currentColor"
            />
          </svg>
          <div className="bg-white w-full h-20 -mt-px" />
        </div>
      </div>
      {/* container */}
      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
       
        {/* All-In-One Cloud Software. */}
        <div data-aos="flip-up" className="max-w-xl mx-auto text-center mt-24">
          <h1 className="font-bold text-darken my-3 text-2xl">
          All-In-One <span className="text-yellow-500">School Management Software.</span>
          </h1>
          <p className="leading-relaxed text-gray-500">
          SchoolX is a powerful School Management Software suite that combines all the tools needed to run a successful school.
          </p>
        </div>
        {/* card */}
        <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
          <div
            data-aos="fade-up"
            className="bg-white shadow-xl p-6 text-center rounded-xl"
          >
            <div
              style={{ background: "#5B72EE" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <img src="img/accurate.png" />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
            STUDENT DATA MANAGEMENT
            </h1>
            <p className="px-4 text-gray-500">
            Manage all your student Bio data, parents data, Accommodation programs, School Attendance,Discipline, and so much more
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={150}
            className="bg-white shadow-xl p-6 text-center rounded-xl"
          >
            <div
              style={{ background: "#F48C06" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <img src="img/report.png" />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
            ACADEMIC RECORDS
            </h1>
            <p className="px-4 text-gray-500">
            Enjoy amazing features like digitalized record keeping, performance analysis , report card generation for both new & Old Curriculum
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={300}
            className="bg-white shadow-xl p-6 text-center rounded-xl"
          >
            <div
              style={{ background: "#29B9E7" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <img src="img/bus.png" />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken lg:h-14 pt-3">
            ACCESS CONTROL
            </h1>
            <p className="px-4 text-gray-500">
            Monitoring which students and staff members have entered your premises has never been simpler. Silence the worries of the parents that entrust you with there kids with daily notifications when their child arrives at or departs from school
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-14 md:gap-5 mt-20">
          <div
            data-aos="fade-up"
            className="bg-white shadow-xl p-6 text-center rounded-xl"
          >
            <div
              style={{ background: "#5B72EE" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <img src="img/chat.png" />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
            COMMUNICATIONS PORTAL
            </h1>
            <p className="px-4 text-gray-500">
            Send text messages to any selection of parents with ease or with a single click            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={150}
            className="bg-white shadow-xl p-6 text-center rounded-xl"
          >
            <div
              style={{ background: "#F48C06" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <img src="img/parent.png" />
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
            PARENTS ACCESS
            </h1>
            <p className="px-4 text-gray-500">
            Parents and Guardians can log into the system to access their children’s academic , disciplinary or financial records            </p>
          </div>
        </div>
        {/* lorem */}
        <div className="mt-28">
          <div
            data-aos="flip-down"
            className="text-center max-w-screen-md mx-auto"
          >
            <h1 className="text-3xl font-bold mb-4">
            SchoolX <span className="text-yellow-500">for Parents and Students</span>
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7"
          >
            <div className="relative md:w-5/12">
              <img className="rounded-2xl" src="img/Rectangle 19.png" alt="" />
              <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                    FOR PARENTS
                  </h1>
                  <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                    COMMING SOON
                  </button>
                </div>
              </div>
            </div>
            <div className="relative md:w-5/12">
              <img className="rounded-2xl" src="img/Rectangle 21.png" alt="" />
              <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                    FOR STUDENTS
                  </h1>
                  <button
                    className="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
                    style={{ background: "rgba(35, 189, 238, 0.9)" }}
                  >
                    LOGIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex items-center sm:space-x-8 mt-36">
          <div data-aos="fade-right" className="sm:w-1/2 relative">
            <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse" />
            <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
            Manage and Push your{" "}
              <span className="text-yellow-500">School to the next Level.</span>
            </h1>
            <div>
            <div className="flex items-center space-x-5 my-5">
        <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
          <svg className="w-4 h-4" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="11.8182" height="11.8182" rx={2} fill="#2F327D" />
            <rect y="14.1816" width="11.8182" height="11.8182" rx={2} fill="#2F327D" />
            <rect x="14.7727" width="11.8182" height="11.8182" rx={2} fill="#2F327D" />
            <rect x="14.7727" y="14.1816" width="11.8182" height="11.8182" rx={2} fill="#F48C06" />
          </svg>
        </div>
        <p><span className="text-yellow-500">Fast Working Process</span><br />We can migrate your data and have you running in less than a week.</p>
      </div>
      <div className="flex items-center space-x-5 my-5">
          <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x={8} y={6} width={20} height={20} rx={2} fill="#2F327D" />
              <rect width="21.2245" height="21.2245" rx={2} fill="#F48C06" />
            </svg>
          </div>
          <p><span className="text-yellow-500">24/7 Hours S</span><br />We are with you every step of the way and help you overcome any huddles you may come across.</p>
        </div>
        <div className="flex items-center space-x-5 my-5">
          <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z" fill="#2F327D" />
            </svg>
          </div>
          <p><span className="text-yellow-500">Communication Portal</span><br />Making public communication to parents has been made easier in a few clicks send email or SMS communications concerning school programs, students welfare, etc.</p>
        </div>
      </div>
          </div>
          <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
            <div
              style={{ background: "#23BDEE" }}
              className="floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"
            />
            <img
              className="rounded-xl z-40 relative"
              src="img/teacher-explaining.png"
              alt=""
            />
            <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50">
              <svg
                className="w-5 h-5 ml-1"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                  fill="#23BDEE"
                />
              </svg>
            </button>
            <div className="bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3" />
          </div>
        </div>
        <div className="md:flex mt-40 md:space-x-10 items-start">
          <div data-aos="fade-down" className="md:w-7/12 relative">
            <div
              style={{ background: "#33EFA0" }}
              className="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse"
            />
            <div
              style={{ background: "#33D9EF" }}
              className="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping"
            />
            <img
              className="relative z-50 floating"
              src="img/cards.png"
              alt=""
            />
            <div
              style={{ background: "#5B61EB" }}
              className="w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse"
            />
            <div
              style={{ background: "#F56666" }}
              className="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping"
            />
          </div>
          <div
            data-aos="fade-down"
            className="md:w-5/12 mt-20 md:mt-0 text-gray-500"
          >
            <div className="flex items-center space-x-5 my-5">
          <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z" fill="#2F327D" />
            </svg>
          </div>
          <p><span className="text-yellow-500">Access Control</span><br />One of our the most in-demand features indeed!. Monitor when your day scholars are picked up or dropped off by the school shuttle, and when they arrive or depart from school premises all the while promptly notifying their guardians to subdue their worries.</p>
        </div>
        <div className="flex items-center space-x-5 my-5">
        <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
          <svg className="w-4 h-4" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="11.8182" height="11.8182" rx={2} fill="#2F327D" />
            <rect y="14.1816" width="11.8182" height="11.8182" rx={2} fill="#2F327D" />
            <rect x="14.7727" width="11.8182" height="11.8182" rx={2} fill="#2F327D" />
            <rect x="14.7727" y="14.1816" width="11.8182" height="11.8182" rx={2} fill="#F48C06" />
          </svg>
        </div>
        <p><span className="text-yellow-500">Fast Working Process</span><br />We can migrate your data and have you running in less than a week.</p>
      </div>
      <div className="flex items-center space-x-5 my-5">
          <div className="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x={8} y={6} width={20} height={20} rx={2} fill="#2F327D" />
              <rect width="21.2245" height="21.2245" rx={2} fill="#F48C06" />
            </svg>
          </div>
          <p><span className="text-yellow-500">24/7 Hours S</span><br />We are with you every step of the way and help you overcome any huddles you may come across.</p>
        </div>
            
          </div>
        </div>
       
        {/* Latest News and Resources */}

        <div
          data-aos="zoom-in-up"
          className="my-14 flex flex-col lg:flex-row lg:space-x-20"
        >
        <News />
        </div>
        <Pricing />
        <Faq />
    </div>
        
    </div>
  );
}

export default Home;
