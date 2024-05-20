import { Profile2 } from "../../Assets/images";

const AboutMe = () => {
  return (
    <div id="about-me" className="relative bg-gray-900">
      <div className="barber-pic absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10"></div>
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white">
        <div className="max-w-xl mb-10 md:mx-auto lg:max-w-5xl md:mb-12">
          <h2 className="text-center max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">About</span>
            </span>{" "}
            Me
          </h2>
          <div className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 p-2 flex items-center">
              <img
                src={Profile2}
                alt="Raul"
                className="mx-auto h-[400px] rounded-lg border border-gray-800 shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-2 py-8">
              <p className="text-base roboto text-gray-400 md:text-lg">
                Hello there! I am a dedicated software engineering student at
                the esteemed Faculty of Engineering and Technology, University
                of Buea. With a strong passion for technology, I have been on an
                exciting journey of developing a diverse range of tech-related
                skills, making me a versatile full-stack developer.
              </p>
              <p className="mt-4 text-base roboto text-gray-400 md:text-lg">
                What truly drives me is the thrill of problem-solving and
                creating innovative, sustainable solutions for the community. I
                believe that technology has the power to transform lives and
                make a positive impact. With an unending desire to learn and
                grow, I constantly seek opportunities to improve my skills and
                stay up-to-date with the latest advancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
