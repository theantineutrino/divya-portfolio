import { TypeAnimation } from "react-type-animation";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineArrowDown,
} from "react-icons/ai";
import resumePDF from "../assets/Divya Sharma resume.pdf";
import myPIc from "../assets/divya.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Hero() {
  AOS.init({
    duration: 1200,
  });
  return (
    <div
      id="home"
      className="flex flex-col bg-gradient-to-r from-[#141801] to-[#201e2b] h-fit justify-center items-center font-display"
    >
      <div className="sm:flex sm:flex-col-reverse md:flex-row justify-between m-10 mt-20 bg-white bg-opacity-5 gap-10 items-center border-solid border-2 lg:p-7 border-[#2d2c3d] rounded-3xl ">
        <div
          className="md:w-1/2 drop-shadow-2xl rounded-[900px] relative m-4"
          data-aos="fade-up"
        >
          <div className="h-[66vw] w-[66vw] md:w-[36vw] md:h-[36vw] lg:h-[33vw] absolute bottom-0 left-3 lg:w-[33vw] rounded-[100%] bg-blue-400"></div>
          <div
            className="h-[66vw] w-[66vw] md:w-[36vw] md:h-[36vw] lg:h-[33vw] absolute bottom-0 left-3 lg:w-[33vw] rounded-[100%]  bg-blue-400 blur-2xl"
            data-aos="fade-up"
          ></div>
          <div className="rounded-[900px] overflow-hidden" data-aos="fade-up">
            <img className="drop-shadow-xl w-[70vh] h-fit" src={myPIc} alt="" />
          </div>
          <img
            className=" w-[70px] md:w-[120px] absolute bottom-[-10px] md:left-[50px] md:bottom-[-35px] animate-[spin_7s_linear_infinite]"
            src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
            alt=""
          ></img>
        </div>
        <div className="md:w-1/2 gap-2 m-5">
          <div
            className="text-3xl text-gray-200 lg:text-5xl font-semi-bold pt-8 md:pt-0"
            data-aos="fade-up"
          >
            Hello I am Divya Sharma
          </div>
          <div data-aos="fade-up">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Freelancer",
                2000,
                "Artist",
                2000,
                "",
              ]}
              speed={30}
              wrapper="p"
              repeat={Infinity}
              className="text-yellow-500 text-2xl md:text-4xl font-semi-bold"
            />
          </div>
          <div className="items-center text-gray-200">
            <div className="tracking-[0.1rem] p-2" data-aos="fade-left">
              a student at BPIT
            </div>
            {/* <p className="text-md md:w-[30vw] p-2 md:p-7">
              I like working on various technologies and exporing new things
              it's usually fun...
            </p> */}
            <div className="flex justify-center md:justify-start">
              {/* <button className="p-4 bg-black m-2 rounded-lg text-md pt-1 pb-1 text-white md:text-lg hover:text-yellow-500">
                Hire Me
              </button> */}
              <a
                href={resumePDF}
                className=" hover:text-yellow-500 text-black"
                download
              >
                <div className="p-4 bg-white m-2 rounded-lg pt-1 pb-1 text-md md:text-lg flex items-center gap-2">
                  Resume
                  <AiOutlineDownload className="h-[1.8rem]" />
                </div>
              </a>
            </div>
            <div
              className="flex justify-center gap-4 md:justify-start md:pl-4"
              data-aos="fade-up"
            >
              <a href="https://github.com/theantineutrino">
                {" "}
                <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/divya-sharma-6744a4206/">
                {" "}
                <AiFillLinkedin className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="animate-[bounce_0.5s_infinite] text-md">scroll</h2>
        <AiOutlineArrowDown className="animate-[bounce_0.5s_infinite] text-3xl" />
      </div>
    </div>
  );
}
