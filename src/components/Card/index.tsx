import React, { FunctionComponent } from "react";
import CSS from "csstype";

export interface CardProperties {
  setbackground: boolean;
  bgcolor: string;
}

export const Card: FunctionComponent<CardProperties> = (props) => {

   const setBackground = typeof props.setbackground == "string" ? props.setbackground === "true" : !!props.setbackground;

  const cardStyle: CSS.Properties = {
    display: "block",
    color: "white",
    boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.15)",
    borderRadius: "0.5rem",
    overflow: "hidden",
    textAlign: "center",
    position: "relative",
    background: setBackground ? props.bgcolor : "none",
    paddingTop: "0.5rem",
    paddingBottom: "1rem",
  };

  return <div style={cardStyle}>{props.children}</div>;
};
