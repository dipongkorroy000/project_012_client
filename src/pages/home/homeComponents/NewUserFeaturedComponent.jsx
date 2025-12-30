import {motion} from "framer-motion";

const NewUserFeaturedComponent = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: {opacity: 0, y: 30},
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {delay: i * 0.2, duration: 0.5},
    }),
  };

  const tasks = [
    {
      title: "For new buyer",
      description: "Earn 50 coins by submitting a detailed review.",
      badge: "High Reward",
    },
    {
      title: "For new worker",
      description: "Earn 10 coins by submitting a detailed review.",
      badge: "High Reward",
    },
    {
      title: "Top worker bonus",
      description: "Workers with 10,000+ coins receive a 100 coin bonus!",
      badge: "Special Bonus",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-10 max-md:text-xl">🎯 Featured Tasks</h2>

      <div className=" flex gap-5 max-lg:flex-col w-full justify-center">
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{scale: 1.05}}
            className="card bg-base-100 w-full border border-gray-100 dark:border-gray-700 shadow-md p-3 max-md:p-0"
          >
            <div className="card-body">
              <h3 className="card-title text-2xl">{task.title}</h3>
              <p className="text-gray-400 max-md:text-sm">{task.description}</p>
              <div className="badge mt-2 bg-mint-600 dark:bg-mint-900 px-3 py-3 font-serif">{task.badge}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default NewUserFeaturedComponent;
