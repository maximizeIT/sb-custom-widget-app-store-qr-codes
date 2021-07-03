import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

import { QRCodeView } from "./views/qrcodeView";

/**
 * React Component
 */
export interface CustomWidgetAppStoreQrCodesProps extends BlockAttributes {
  urlios: string;
  urlandroid: string;
  showtitles: boolean;
  titlecolor: string;
  setbackground: boolean;
  bgcolor: string;
}

export const CustomWidgetAppStoreQrCodes = ({ urlios, urlandroid, showtitles, titlecolor, setbackground, bgcolor, contentLanguage }: CustomWidgetAppStoreQrCodesProps): ReactElement => {

  return <QRCodeView
    {...{
      urlios,
      urlandroid,
      showtitles,
      titlecolor,
      setbackground,
      bgcolor,
      contentLanguage
    }}
  />
};

