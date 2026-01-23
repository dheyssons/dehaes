export const blueishfade = {
  initial: {
    color: "#9ca3af", // cinza
  },

  blue: (i: number) => ({
    color: "#075a87",
    transition: {
      delay: i * 0.03,
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  }),

  black: (i: number) => ({
    color: "#000000",
    transition: {
      delay: i * 0.03,
      duration: 0.22,
      ease: [0.55, 0, 1, 0.45],
    },
  }),
};
