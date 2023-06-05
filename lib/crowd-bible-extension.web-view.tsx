import papi from "papi";
// import papi from "shared/services/papi.service";

import { useState } from "react";
import App from "./src/App";
import { SomeDataProvider } from "../public/crowd-bible-extension";

const {
  react: {
    hooks: { useData, useDataProvider },
    // You can no longer access papi components here. You must now access them by
    // importing them from the papi-components npm package (in paranext-core)
    // components: { Button },
  },
  logger,
} = papi;

globalThis.webViewComponent = function() {

  const someDataProvider = useDataProvider<SomeDataProvider>(
    "crowd-bible.test-data-engine"
  );

  // This syntax is incorrect - see extension template for an example
  // const someData = useData(someDataProvider);

  return (
    <>
      <App/>
    </>
  );
}
