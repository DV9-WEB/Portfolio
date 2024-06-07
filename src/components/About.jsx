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
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const About = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="flex-1 bg-white min-h-screen overflow-y-auto">
      <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
        <span className="text-4xl">💬</span>
        <h1 className="__className_399708 text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black">
          About Me
        </h1>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
            <motion.div
              variants={item}
              style={{
                opacity: 1,
                transform: "translateY(0px) rotate(3deg) translateZ(0px)",
              }}
            >
              <img
                alt="about"
                loading="lazy"
                width="200"
                height="400"
                decoding="async"
                data-nimg="1"
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
                src="/about1.webp"
                style={{ color: "transparent" }}
              />
            </motion.div>

            <motion.div
              variants={item}
              style={{
                opacity: 1,
                transform: "translateY(0px) rotate(3deg) translateZ(0px)",
              }}
            >
              <img
                alt="about"
                loading="lazy"
                width="200"
                height="400"
                decoding="async"
                data-nimg="1"
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
                src="/about2.webp"
                style={{ color: "transparent" }}
              />
            </motion.div>
            <motion.div
              variants={item}
              style={{
                opacity: 1,
                transform: "translateY(0px) rotate(3deg) translateZ(0px)",
              }}
            >
              <img
                alt="about"
                loading="lazy"
                width="200"
                height="400"
                decoding="async"
                data-nimg="1"
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
                src="/about3.webp"
                style={{ color: "transparent" }}
              />
            </motion.div>
            <motion.div
              variants={item}
              style={{
                opacity: 1,
                transform: "translateY(0px) rotate(3deg) translateZ(0px)",
              }}
            >
              <img
                alt="about"
                loading="lazy"
                width="200"
                height="400"
                decoding="async"
                data-nimg="1"
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
                src="/about4.webp"
                style={{ color: "transparent" }}
              />
            </motion.div>
          </div>
          <div className="max-w-4xl">
            <p className="text-sm lg:text-base font-normal text-secondary mt-4">
              Hey there, I&apos;m Deepanshu Verma - a passionate developer, avid
              writer, and a connoisseur of awesome design and development.
              Welcome to my corner of the digital world!
            </p>
            <p className="text-sm lg:text-base font-normal text-secondary mt-4">
              Since the early days of my journey, My acadmic backgroud I have an strong interest about the
              technolgies and developments how they work smoothly , I&apos;m a
              such student who is very fascinated about technologies and
              software development, many things i learn from that how to work
              sysmeticaly without any mistake that help me in coding to code
              maintain sytemeticaly and also be a good debugger
            </p>
            <p className="text-sm lg:text-base font-normal text-secondary mt-4">
              But my journey extends beyond just coding. I have a love for
              writing that has led me to explore the world of words. Whether
              it&apos;s tech articles that simplify complex ideas or creative
              stories that spark the imagination, I write to inform, entertain,
              and inspire.
            </p>
            <p className="text-sm lg:text-base font-normal text-secondary mt-4">
              What really sets me apart is my appreciation for design. I firmly
              believe that functionality and aesthetics should go hand in hand.
              My keen eye for design ensures that every project I work on not
              only runs smoothly but also looks fantastic.
            </p>
            <p className="text-sm lg:text-base font-normal text-secondary mt-4">
              Through this website, I aim to share my insights, experiences, and
              creations with you. Whether you&apos;re a fellow developer seeking
              solutions, a writer looking for inspiration, or someone who
              appreciates good design, there&apos;s something here for you.
            </p>
            <p className="text-sm lg:text-base font-normal text-secondary mt-4">
              Join me on this exciting journey where technology meets
              creativity, logic meets imagination, and code meets design.
              Together, we can explore the limitless possibilities of tech and
              storytelling, all while appreciating the beauty of
              well-thought-out design.
            </p>
            <p className="text-sm lg:text-base font-normal text-secondary mt-4">
              Thank you for being here, and I can&apos;t wait to embark on this
              adventure with you.
            </p>
          </div>
        </div>
      </main>
      <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
        <span className="font-semibold">2024  designed by Deepanshu itself with ❤ </span>
      </div>
    </motion.div>
  );
};

export default About;
