import React, { FunctionComponent } from "react";
import CSS from "csstype";

export interface TitleProperties {
  title: string;
  titlecolor: string;
}

export const Title: FunctionComponent<TitleProperties> = (props) => {
  
  const titleStyle: CSS.Properties = {
    color: props.titlecolor,
    padding: "5px",
  };

  return <h2 style={titleStyle}>{props.title}</h2>;
};
