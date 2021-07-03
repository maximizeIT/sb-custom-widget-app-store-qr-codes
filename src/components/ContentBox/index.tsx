import React, { FunctionComponent } from "react";

import CSS from "csstype";
import styled from "styled-components";

import { Title } from "../Title";
import { QRCode } from "../QRCode";
import Info from "../Icons/info.svg";

export interface ContentBoxProperties {
  onInfoButtonClick: (e: React.SyntheticEvent) => void;
  showtitles: boolean;
  titlecolor: string;
  urlios: string;
  urlandroid: string;
}

export const ContentBox: FunctionComponent<ContentBoxProperties> = (props) => {

  const isTitleShown = typeof props.showtitles == "string" ? props.showtitles === "true" : !!props.showtitles;

  const infoButtonStyle: CSS.Properties = {
    position: "absolute",
    right: "0",
    bottom: "0",
    marginRight: "0.8rem",
    marginBottom: "0.8rem",
    height: "1rem",
    cursor: "pointer",
  };

  const ColumnStyle = styled.div`
    float: left;
    width: 50%;
    padding: 5px;
    &:hover, &:active, &:focus, &:visited {
      text-decoration: none;
    }
  `
  const RowStyle = styled.div`
    &:after {
      content: "" !important;
      clear: both !important;
      display: table !important;
    }
  `

  return (
    <>
      <RowStyle className="row">
        <ColumnStyle className="column">
          { isTitleShown ? 
              <Title 
                  title="Apple App Store (iOS)"
                  titlecolor={props.titlecolor} /> 
              : ''
          }          
          <QRCode
            url={props.urlios}
            alttext="Apple App Store (iOS)" />
        </ColumnStyle>
        <ColumnStyle className="column">
          { isTitleShown ? 
              <Title 
                  title="Google Play Store (Android)"
                  titlecolor={props.titlecolor} /> 
              : ''
          }
          <QRCode
            url={props.urlandroid}
            alttext="Google Play Store (Android)" />
        </ColumnStyle>
      </RowStyle>

      <div
        role="button"
        style={infoButtonStyle}
        onClick={props.onInfoButtonClick}
      >
        <Info />
      </div>
    </>
  );
};
