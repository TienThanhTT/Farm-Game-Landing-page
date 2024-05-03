export const fadeIn = {
  hidden: { opacity: 0, x: "-50%" },
  visible: { opacity: 1, x: 0 },
};

export const fadeOut = {
  hidden: { opacity: 0, x: "50%" },
  visible: { opacity: 1, x: 0 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: [-100, 0] },
};

export const appear = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

export const slideVariants = {
  hiddenRight: {
    x: "-20%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "20%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
    },
  },
};
