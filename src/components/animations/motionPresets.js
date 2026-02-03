export const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };
  
  export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.35 } },
  };
  
  export const stagger = (gap = 0.08) => ({
    hidden: {},
    show: { transition: { staggerChildren: gap } },
  });
  