import { Profile } from "../../Assets/images";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Junoir Full Stack Developer.", "UX Designer.", "Tutor"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="overflow-hidden h-[85vh] flex items-center justify-center mb-10 ">
      <div className="relative px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 ">
        <div className="flex flex-col items-center justify-between w-full sm:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6 lg:text-center">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Hi there, I'm{" "}
                <span className="inline-block text-blue-accent-700 mt-2">
                  Fabrice Mokfembam
                </span>
              </h2>
              <p className="text-gray-700 text-[23px] font-medium text-base md:text-lg">
                I'm a {' '}
                <span className="font-extrabold text-[25px]">{text}</span>
                <Cursor 
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#ff014f"
                />
              </p>
            </div>
            <div className="flex items-center justify-start lg:justify-center">
              <a
                href="/F_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="items-center h-12 px-6 py-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-accent-400 hover:bg-blue-accent-700"
              >
                DownLoad Resume
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="flex w-full justify-center h-[290px] relative">
              <img
                width={290}
                className="z-5 rounded-[50%]"
                src={Profile}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
