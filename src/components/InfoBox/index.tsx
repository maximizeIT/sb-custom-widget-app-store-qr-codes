import React from "react";
import CSS from "csstype";
import Cross from "../Icons/cross.svg";

export interface InfoBoxProperties {
  onCloseClick: (e: React.SyntheticEvent) => void;
}

export const InfoBox: React.FC<InfoBoxProperties> = (props) => {
  const infoBoxStyle: CSS.Properties = {
    display: "block",
    position: "absolute",
    left: "0",
    top: "0",
    bottom: "0",
    right: "0",
    borderRadius: "0.5rem",
    background: "rgba(255, 255, 255, 0.8)",
  };

  const infoBoxWithBackdropFilter = {
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    ...infoBoxStyle,
  };

  const infoBoxContent: CSS.Properties = {
    color: "black",
    position: "relative",
    padding: "2rem",
  };

  const infoBoxContentLink: CSS.Properties = {
    color: "black",
    cursor: "pointer",
    textDecoration: "underline",
  };

  const infoButtonStyle: CSS.Properties = {
    position: "absolute",
    right: "0",
    bottom: "0",
    marginRight: "0.8rem",
    marginBottom: "0.8rem",
    height: "1rem",
    cursor: "pointer",
  };

  return (
    <div style={infoBoxWithBackdropFilter}>
      <h3 style={infoBoxContent}>
        Using QR code generator from <a
          href="https://goqr.me/"
          style={infoBoxContentLink}
          target="_blank"
          rel="noreferrer"
        >
          https://goqr.me
        </a>.
        <br /><br />
        The QR code API documentation can be found <a
          href="https://goqr.me/api/"
          style={infoBoxContentLink}
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>, specifically the <a
          href="https://goqr.me/api/doc/create-qr-code/"
          style={infoBoxContentLink}
          target="_blank"
          rel="noreferrer"
        >
          create-qr-code endpoint
        </a>.
      </h3>
      <div role="button" style={infoButtonStyle} onClick={props.onCloseClick}>
        <Cross />
      </div>
    </div>
  );
};
