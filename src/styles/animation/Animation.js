export const fadeIn = {
  hidden: { opacity: 0, x: "-50%" },
  visible: { opacity: 1, x: 0, trasition: { duration: 1.5 } },
};

export const fadeOut = {
  hidden: { opacity: 0, x: "50%" },
  visible: { opacity: 1, x: 0, trasition: { duration: 1.5 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, trasition: { duration: 1 } },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, trasition: { duration: 1 } },
};

export const appear = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, trasition: { duration: 0.3 } },
};

export const slideVariants = {
  hiddenRight: {
    x: "-50%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "50%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    scale: 0,
    trasition: { duration: 1 },
  },
};
