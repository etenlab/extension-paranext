import papi from "papi";
// import papi from "shared/services/papi.service";

import { useState } from "react";
import App from "./src/App";
import { SomeDataProvider } from "../public/crowd-bible-extension";

const {
  react: {
    hooks: { useData, useDataProvider },
    components: { Button },
  },
  logger,
} = papi;

globalThis.webViewComponent = function() {

  const someDataProvider = useDataProvider<SomeDataProvider>(
    "crowd-bible.test-data-engine"
  );

  const someData = useData(someDataProvider);

  return (
    <>
      <App/>
    </>
  );
}
