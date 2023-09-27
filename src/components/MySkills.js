import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript, DiNodejs } from "react-icons/di";
import {
  BiLogoTailwindCss,
  BiLogoCPlusPlus,
  BiLogoReact,
  BiLogoPython,
} from "react-icons/bi";
import { SiExpress, SiMongodb } from "react-icons/si";
import SkillCard from "./SkillCard";
import "aos/dist/aos.css";
export default function MySkills() {
  return (
    <div id="skills" className="h-fit items-center p-10 gap-2">
      <div
        className="text-3xl md:text-4xl font-bold font-sans font-display text-gray-400 p-4"
        data-aos="fade-up"
      >
        My Skills
      </div>
      <div className="pl-20">
        <hr />
      </div>
      <div className="flex justify-between flex-col lg:justify-center items-center md:flex-row font-display">
        <div
          className="md:w-1/2 flex flex-wrap justify-center gap-[14px] items-center pt-5 pb-5 md:pt-10 md:pb-10"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center hover:text-red-600">
            <AiFillHtml5 className="text-3xl md:text-7xl" />
            <p className="text-[10px]">HTML</p>
          </div>
          <div className="flex flex-col items-center hover:text-yellow-300">
            <DiCss3 className="text-3xl md:text-7xl" />
            <p className="text-[10px]">CSS</p>
          </div>
          <div className="flex flex-col items-center hover:text-green-600">
            <DiJavascript className="text-3xl md:text-7xl" />
            <p className="text-[10px]">Javascript</p>
          </div>
          <div className="flex flex-col items-center hover:text-blue-400">
            <BiLogoTailwindCss className="text-3xl md:text-7xl" />
            <p className="text-[10px]">Tailwind</p>
          </div>
          <div className="flex flex-col items-center hover:text-purple-600">
            <BiLogoCPlusPlus className="text-3xl md:text-7xl" />
            <p className="text-[10px]">C++</p>
          </div>
          <div className="flex flex-col items-center hover:text-blue-800">
            <BiLogoPython className="text-3xl md:text-7xl" />
            <p className="text-[10px]">Python</p>
          </div>{" "}
          <br />
          <div className="flex flex-wrap justify-center gap-1 md:gap-5">
            <SkillCard title={<SiMongodb />} />
            <SkillCard title={<SiExpress />} />
            <SkillCard title={<BiLogoReact />} />
            <SkillCard title={<DiNodejs />} />
          </div>
        </div>
        <div className="md:w-1/2 w-full" data-aos="fade-up">
          <div className="text-md md:text-3xl">Tech Experience</div>
          <p className="text-sm">
            I've worked on several technologies apart from web and have also
            participated in several hackathons which has enabled me to work well
            under a time limit. Some of the achievements are :-
            <ul className="list-disc p-6 pt-2">
              <li>First position in Ideathon - BPIT</li>
              <li>4 successful open source contribution in Hacktober'22</li>
              <li>Runner up in SIH</li>
              <li>Runner up in Build for future</li>
              <li>Participated in Vihaan 6.0</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
