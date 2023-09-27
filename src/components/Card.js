export default function Card(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div
        className="flex md:block md:h-full md:max-w-sm rounded overflow-hidden shadow-lg"
        data-aos="flip-right"
      >
        {/* hover:animate-[pulse_5s_linear_infinite] */}
        <div className="overflow-hidden relative">
          <img class="w-full md:w-full" src={props.img} alt={props.title}></img>
          <div class="p-2 font-display md:absolute md:top-0 md:flex md:justify-center items-center md:opacity-0 transition duration-300 ease-in-out hover:opacity-70 bg-white h-full w-full z-0">
            <div class="text-md font-bold md:text-xl text-center">
              {props.title}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
