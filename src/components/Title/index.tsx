import React, { FunctionComponent } from "react";
import CSS from "csstype";

export interface TitleProperties {
  title: string;
  titlecolor: string;
}

export const Title: FunctionComponent<TitleProperties> = (props) => {

  const titleColor = props.titlecolor ? props.titlecolor : "#333333";
  
  const titleStyle: CSS.Properties = {
    color: titleColor,
    padding: "5px",
  };

  return <h2 style={titleStyle}>{props.title}</h2>;
};
