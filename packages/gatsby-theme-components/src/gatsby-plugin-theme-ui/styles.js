/* eslint-disable quote-props */
export default {
  // Styling for link tags
  a: {
    color: "text",
    bg: "background",
    textDecoration: "none",
    borderBottom: "0.1rem dotted",
    // TODO: Fix this. See https://github.com/system-ui/theme-ui/issues/{75/81}
    borderColor: "text",
    ":hover": {
      color: "background",
      bg: "text",
      borderBottom: "none",
    },
  },
  // Styling for heading tags
  h1: {
    fontFamily: "heading",
    fontSize: 5,
    "> span": {
      fontSize: 5,
    },
  },
  h2: {
    fontFamily: "heading",
  },
  h3: {
    fontFamily: "heading",
  },
  h4: {
    fontFamily: "heading",
  },
  h5: {
    fontFamily: "heading",
  },
  h6: {
    fontFamily: "heading",
  },
  // Styling for normal paragraph tags
  p: {
    fontSize: 2,
  },
};
