import React, { FunctionComponent } from "react";
import CSS from "csstype";

export interface ImageProperties {
  url: string;
  alttext: string;
}

export const Image: FunctionComponent<ImageProperties> = (props) => {

  const imageStyle: CSS.Properties = {
    fontSize: "16px",
    width: "100%",
    padding: "15px",
  };

  // https://goqr.me/api/doc/create-qr-code/
  const encodedURL = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(props.url);

  return (
      <img style={imageStyle} src={encodedURL} alt={props.alttext}></img>
  );
};
