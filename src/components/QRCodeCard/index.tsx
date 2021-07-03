import React, { useState, FunctionComponent } from "react";

import { Card } from "../Card";
import { ContentBox } from "../ContentBox";
import { InfoBox } from "../InfoBox";

export interface QRCodeCardProperties {
  urlios: string;
  urlandroid: string;
  showtitles: boolean;
  titlecolor: string;
  setbackground: boolean;
  bgcolor: string;
}

export const QRCodeCard: FunctionComponent<QRCodeCardProperties> = (props) => {
  
  const [displayInfo, setDisplayInfo] = useState(false);

  const onInfoBtnClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDisplayInfo(!displayInfo);
  };

  return (
    <Card setbackground={props.setbackground} bgcolor={props.bgcolor}>
      <ContentBox
        {...props}
        onInfoButtonClick={onInfoBtnClick}
      />
      {displayInfo && <InfoBox onCloseClick={onInfoBtnClick} />}
    </Card>
  );
};
