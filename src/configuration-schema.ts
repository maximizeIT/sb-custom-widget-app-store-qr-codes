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

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  required: [
    "urlios",
    "urlandroid"
  ],
  properties: {
    urlios: {
      type: "string",
      format: "uri",
      title: "Apple App Store URL",
      default: "https://apps.apple.com/de/app/staffbase-mitarbeiter-app/id918506038",
    },
    urlandroid: {
      type: "string",
      format: "uri",
      title: "Google Play Store URL",
      default: "https://play.google.com/store/apps/details?id=com.mitarbeiterapp.android",
    },
    showtitles: {
      type: "boolean",
      title: "Show Titles",
      default: true,
    },
    titlecolor: {
      type: "string",
      title: "Title Color",
      default: "#333333",
    },
    setbackground: {
      type: "boolean",
      title: "Set Background",
      default: false,
    },
    bgcolor: {
      type: "string",
      title: "Background Color",
      default: "#24B5E1",
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  urlios: {
    "ui:help": "Please enter a valid URL to your app in the Apple App Store.",
    "ui:autofocus": true,
  },
  urlandroid: {
    "ui:help": "Please enter a valid URL to your app in the Google Play Store.",
  },
  showtitles: {
    "ui:help": "Do you want to show the titles?"
  },
  titlecolor: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the titles. Default: #333333"
  },
  setbackground: {
    "ui:help": "Do you want to set a background for the whole widget? Default: true"
  },
  bgcolor: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the background. Default: none"
  },
};
