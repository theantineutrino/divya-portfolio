import Card from "./Card";
import Malhaar from "../assets/Malhaar.png";
import "aos/dist/aos.css";
export default function Work() {
  return (
    <div className="h-fit items-center p-10 gap-2" id="works">
      <div
        className="text-3xl md:text-4xl font-bold font-sans font-display text-gray-400 p-4"
        data-aos="fade-up"
      >
        Works
      </div>
      <div className="pl-20">
        <hr />
      </div>
      <div className="flex flex-col items-center m-10 ml-0 mr-0">
        {/* <div>here are some of my works</div> */}
        <div className="grid gap-2 md:grid-cols-3 md:gap-6">
          <Card
            img={Malhaar}
            title="Malhaar Website"
            link="https://malhaar.bpitindia.ac.in/"
          />

          {/* <Card img={Malhaar} title="Malhaar Website" />

          <Card img={Malhaar} title="Malhaar Website" />
          <Card img={Malhaar} title="Malhaar Website" />
          <Card img={Malhaar} title="Malhaar Website" /> */}
        </div>
      </div>
    </div>
  );
}
