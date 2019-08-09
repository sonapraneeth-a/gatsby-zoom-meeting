/* eslint-disable quotes */
export default {
  fonts: {
    // Font used for headings <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
    heading:
      `-apple-system, system-ui, BlinkMacSystemFont,` +
      `"Segoe UI Semibold", Roboto, Oxygen-Sans, Ubuntu, Cantarell,` +
      `"Helvetica Neue",serif;`,
    // Font used for body
    body:
      `-apple-system, system-ui, BlinkMacSystemFont, ` +
      `"Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, ` +
      `"Helvetica Neue",sans-serif;`,
    // Font used for code blocks
    monospace:
      `Consolas, Menlo, Monaco, "Andale Mono","Ubuntu Mono", ` +
      `source-code-pro, Courier New, monospace`,
  },
  fontWeights: {
    // Font weight for body. Normal
    body: 400,
    // Font weight for headings. Bold
    heading: 700,
    // Bold font weight
    bold: 700,
  },
  // Font sizes stack
  fontSizes: [
    "0.75rem", "0.875rem", "1rem", "1.25rem", "1.5rem", "2rem", "3rem", "4rem",
  ],
};
