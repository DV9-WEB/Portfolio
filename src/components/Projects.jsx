import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    x: -70,
    opacity: 0,
  },
  visible: {
    x: [-70, -35, 0], // Define keyframes for x position
    opacity: [0, .5, 1], // Define keyframes for opacity
    transition: {
      x: {
        times: [1, 1, 1], // Define timing for each keyframe
        ease: "linear", // Use linear easing
      },
      opacity: {
        times: [0, 0.5, 1], // Define timing for each keyframe
        ease: "linear", // Use linear easing
      },
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="overflow-auto w-[100%]"
    >
      <main className="max-w-4xl mx-auto py-20 px-4 md:px-10">
        <span className="text-4xl">⚡</span>
        <h1 className="__className_399708 text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-10">
          {" "}
          What I&apos;ve been working on
        </h1>

        <div className="grid grid-cols-1  gap-10">
          <div>
            <motion.a
              variants={item}
              target="_blank"
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
              href="https://shopping-react-n4upgspek-dv9-webs-projects.vercel.app/"
            >
              <img
                className="w-44 h-40 object-contain"
                src="/Shopping.png"
                alt="Shopping"
              />

              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="__className_399708 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black text-lg md:text-lg lg:text-lg">
                    E-Commerce
                  </h4>
                  <p className="font-normal text-secondary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    A E-Commerce web-app it has all features.
                  </p>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  <span className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                    React js
                  </span>
                  <span className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                    Styled Components
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
          <motion.a
            variants={item}
            target="_blank"
            className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            href="https://dv9-web.github.io/Traveling-Website/#"
          >
            <img
              className="w-44 h-40 object-cover"
              src="/Travelling.png"
              alt=""
            />
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="__className_399708 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black text-lg md:text-lg lg:text-lg">
                  Travelling App
                </h4>
                <p className="font-normal text-secondary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                  A full responsice and animated travelling app.
                </p>
              </div>
              <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                <span className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                  React js
                </span>
                <span className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary">
                  SCSS
                </span>
              </div>
            </div>
          </motion.a>
        </div>
      </main>
    </motion.section>
  );
};

export default Projects;
