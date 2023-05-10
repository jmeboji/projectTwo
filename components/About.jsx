import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid gris-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#496ee5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            //I am not your avaerage Frontend Engineer
          </p>
          <p className="py-2 text-gray-600">
            I am proficient in HTML, CSS, and JavaScript, and have experience
            working with a variety of frontend frameworks on the M.E.R.N. stack.
            I enjoy working in teams, but can work remotely. I’ve helped design
            and produce Web and Single Page applications using React libraries,
            API’s and various web technologies.I am also excellent in SEO.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="/assets/IMG_3414.png" />
        </div>
      </div>
    </div>
  );
};

export default About;
