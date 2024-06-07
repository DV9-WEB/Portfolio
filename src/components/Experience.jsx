import { motion } from "framer-motion";

const Experience = () => {

  const container = {
    hidden: {
      opacity: 0,
      x : -30,
    },
    visible: {
      opacity: 1,
      x : 0,
    }
  }

    return (
      <motion.section variants={container} initial="hidden" animate="visible" className="overflow-auto w-[100%]">
        <main className="overflow-auto max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
          <span>
            <img src="/logo.png" alt="" />
          </span>
          <h1 className="__className_399708  text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-3">
            {" "}
            Experience
          </h1>
          <h1 className="__className_399708 text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-1">
            {" "}
            Front-End Developer
          </h1>
          <p className="font-semibold text-secondary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
            SSi Digital
          </p>
          <p className="font-semibold text-secondary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
            January 2024 - May 2024
          </p>
          <p className="text-sm lg:text-base font-normal text-secondary mt-4">
            During my 5-month internship at SSi Digital, I had the opportunity to
            immerse myself in a dynamic and innovative environment, where I
            contributed to various development projects and honed my technical
            skills. My key responsibilities and achievements included:
          </p>
          <ul>
            <li className="list-disc">
              <p className="text-sm lg:text-base font-normal text-secondary mt-4">
                <span className="bg-neutral-200 p-1">
                  Font-End Development:
                </span>{" "}
                Assisted in the development and maintenance of web applications
                using technologies such as HTML, CSS, JS and React.
                Contributed to both front-end, ensuring
                seamless integration and functionality.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm lg:text-base font-normal text-secondary mt-4">
                <span className="bg-neutral-200 p-1">
                  Debugging and Troubleshooting:
                </span>{" "}
                Identified and resolved bugs and performance issues in existing
                codebases. Utilized debugging tools and techniques to enhance
                application stability and user experience.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm lg:text-base font-normal text-secondary mt-4">
                <span className="bg-neutral-200 p-1">
                  Learning and Development
                </span>{" "}
                Took advantage of the learning resources and mentorship
                available at SSi Digital to continuously improve my technical skills
                and stay updated with the latest industry trends and best
                practices.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm lg:text-base font-normal text-secondary mt-4">
                <span className="bg-neutral-200 p-1">
                  Feature Implementation:
                </span>{" "}
                Implemented new features and enhancements based on user feedback
                and business requirements. Developed reusable components and
                optimized code for better performance and scalability.
              </p>
            </li>
          </ul>
        </main>
      </motion.section>
    );
};

export default Experience;
