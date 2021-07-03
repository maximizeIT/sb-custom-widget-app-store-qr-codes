import React, { FunctionComponent } from "react";
import { BlockAttributes } from "widget-sdk";

import { QRCodeCard } from "../components/QRCodeCard";

/**
 * React Component
 */
 export interface QRCodeViewProps extends BlockAttributes {
    urlios: string;
    urlandroid: string;
    showtitles: boolean;
    titlecolor: string;
    setbackground: boolean;
    bgcolor: string;
 }

export const QRCodeView: FunctionComponent<QRCodeViewProps> = ({ urlios, urlandroid, showtitles, titlecolor, setbackground, bgcolor }: QRCodeViewProps) => {

    return (
        <QRCodeCard
            urlios={urlios}
            urlandroid={urlandroid}
            showtitles={showtitles}
            titlecolor={titlecolor}
            setbackground={setbackground}
            bgcolor={bgcolor}
        />)
};
