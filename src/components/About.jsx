import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       Hello, I'm Traian and I'm a proficient software developer with a wealth of experience in TypeScript and JavaScript, and an expertise in frameworks such as React, Node.js, 
       and Three.js. I pride myself on my ability to learn quickly, adapt easily to new environments and work closely with clients to provide them with efficient, scalable and user-friendly solutions that address real-world issues.
       I am passionate about what I do and believe in the transformative power of technology to make a positive impact on people's lives. 
       Whether you are looking to build a new website, develop an application, or enhance your existing digital solutions, I am here to help.
       My focus is on creating solutions that are tailored to your specific needs and requirements, while keeping in mind the end-user experience. 
       I believe that good communication is key to successful collaboration, and I strive to build strong relationships with my clients.
       So, if you are looking for a skilled and dedicated developer to help you bring your ideas to life, look no further. 
       Let's work together to create something amazing!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
