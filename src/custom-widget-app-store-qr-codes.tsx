/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";
import styled from "styled-components";

import { Image } from "./components/Image";
import { Title } from "./components/Title";

/**
 * React Component
 */
export interface CustomWidgetAppStoreQrCodesProps extends BlockAttributes {
  urlios: string;
  urlandroid: string;
  showtitles: boolean;
  titlecolor: string
}

export const CustomWidgetAppStoreQrCodes = ({ urlios, urlandroid, showtitles, titlecolor }: CustomWidgetAppStoreQrCodesProps): ReactElement => {

  const isTitleShown = typeof showtitles == "string" ? showtitles === "true" : !!showtitles;

  const Row = styled.div`
    /* Clearfix (clear floats) */
    &:after {
      content: "" !important;
      clear: both !important;
      display: table !important;
    }
  `

  const Column = styled.div`
    float: left;
    width: 50%;
    padding: 5px;
    text-align: center;
  `

  const EmptyUrl = styled.span`
    padding: 5px;
  `
  
  return <Row className="row">
    <Column className="column">
      { isTitleShown ? 
          <Title 
              title="Apple App Store"
              titlecolor={titlecolor} /> 
          : ''
      }
      
      { urlios ? <Image url={urlios} alttext="Apple App Store QR Code" /> :<EmptyUrl className="empty-state">Please enter a URL to the Apple App Store.</EmptyUrl> }
    </Column>
    <Column className="column">
      { isTitleShown ? 
          <Title 
              title="Google Play Store"
              titlecolor={titlecolor} /> 
          : ''
      }
      { urlios ? <Image url={urlandroid} alttext="Google Play Store QR Code" /> :<EmptyUrl className="empty-state">Please enter a URL to the Google Play Store.</EmptyUrl> }
    </Column>
  </Row>;
};

