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

  return <div>
      <QRCodeView
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
    <br /><br />
    <div data-widget-conf-grid-type="100" data-widget-type="Section" data-widget-src="internal://staffbase.content.widgets.Section">
      <div>
        <div data-widget-conf-type="warning" data-widget-on-card="true" data-widget-type="Infobox" data-widget-src="internal://staffbase.content.widgets.Infobox">
          <p>PROTOTYPES AND FOR DEMO PURPOSES ONLY!</p>
          <p>NOT FOR PRODUCTION USE!</p>
          <p>NOT AVAILABLE TO CUSTOMERS!</p>
        </div>
      </div>
    </div>
  </div>
};

