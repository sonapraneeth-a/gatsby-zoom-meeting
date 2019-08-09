/** @jsx jsx */
import {jsx} from "theme-ui";
import React from "react";

function Card({children, ...props}) {
  return (
    <div {...props} sx={{bg: "tomato"}}>{children}</div>
  );
}

export default Card;
