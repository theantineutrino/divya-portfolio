import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        id="contact"
        className="bg-gradient-to-r  gap-10 from-[#141801] to-[#201e2b] flex flex-col md:flex-row justify-between items-center p-10"
      >
        <form
          data-aos="zoom-in"
          className="flex w-full max-w-md md:w-1/2 rounded-2xl shadow-[0_0_20px_15px] shadow-[#636363] justify-center items-center flex-col gap-5 bg-opacity-5 mx-auto bg-white p-10"
          action="mailto:divyaonline20@gmail.com"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-sans font-display text-gray-400 p-4">
            Contact information
          </h1>
          <input
            className="px-3 border-[1px] border-[#636363] text-[#b3b3b3] border-1 bg-[#212121] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
            type="email"
            placeholder="e.g. example@email.com"
            name=""
          />
          <input
            className="px-3 border-[1px] border-[#636363] bg-[#212121] text-[#b3b3b3] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
            type="text"
            placeholder="e.g. John Doe"
            name=""
          />
          <textarea
            className="px-3 border-[1px] border-[#636363] bg-[#212121] text-[#b3b3b3] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
            rows="4"
            cols="50"
            placeholder="Write your message"
            name=""
            id=""
          />
          <button
            className="bg-[#535353] w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
            type="submit"
          >
            <span>Send</span>
          </button>
        </form>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <p className="text-xl lg:text-2xl p-10 font-bold font-sans font-display text-gray-400 text-center max-w-xl">
            Need a website? You can contact me by filling this contact form!{" "}
            <br />
            <br /> meanwhile listen to my favourite songs fetched for you from
            spotify
          </p>
          <iframe
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/7ngOze4zIX7x6CeeIFYdpf?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-[100%] md:w-[30vw] h-[100px] z-0"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r  gap-10 from-[#141801] to-[#201e2b] text-center">
        <div className="p-10 text-gray-400 text-[12px]">
          <hr className="w-full h-full" />
          <p className="mt-10 text-[12px]">
            | Copyright © 2023 Portfolio. All rights reserved |
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
