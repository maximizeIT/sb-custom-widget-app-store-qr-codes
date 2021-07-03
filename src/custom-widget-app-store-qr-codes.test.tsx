import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidgetAppStoreQrCodes} from "./custom-widget-app-store-qr-codes";

describe("CustomWidgetAppStoreQrCodes", () => {
    it("should render the component", () => {
        render(<CustomWidgetAppStoreQrCodes contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
