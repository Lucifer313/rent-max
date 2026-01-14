"use client";

import { discoverContent } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="py-12 mb-16 bg-white"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
        <motion.div variants={itemVariants} className="my-12 text-center p-4">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            Discover
          </h2>
          <p className="mt-2 text-gray-500 text-lg">
            Find Your Dream Rental Property Today!
          </p>
          <p className="max-w-3xl mt-2 mx-auto text-center text-primary-500 mb-10">
            Searching for your dream rental property has never been easier. With
            our user-friendly search feature, you can quickly find the perfect
            home that meets your needs. Start your search today and discover
            your dream rental property!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 mt-5">
            {discoverContent.map((card, index) => (
              <motion.div key={index} variants={itemVariants}>
                <DiscoverCard {...card} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center">
      <div className="p-4 rounded-lg mb-4  flex flex-col items-center justify-center bg-white shadow-lg">
        <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
          <Image
            src={imageSrc}
            width={30}
            height={30}
            alt={title}
            className="w-full h-full"
          />
        </div>
        <h3 className="text-xl font-medium mt-4 text-gray-800">{title}</h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default DiscoverSection;
