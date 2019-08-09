import colors from "./colors";
import styles from "./styles";
import fonts from "./fonts";
import variants from "./variants";
import components from "./components";

export default {
  // this enables the color modes feature
  // and is used as the name for the top-level colors object
  initialColorMode: "light",
  // use CSS custom properties to help avoid flash of colors on
  // initial page load
  // Refer: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
  useCustomProperties: false,
  // Breakpoints supported for the theme
  breakpoints: [
    "20rem", "40rem", "48rem", "64rem", "80rem",
    "86rem", "120rem", "240rem",
  ],
  // Available fonts
  ...fonts,
  // Line heights
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  variants,
  components,
  // Definitions for various color modes
  colors,
  styles,
};
