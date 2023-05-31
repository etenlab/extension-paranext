import papi from "papi";
// import papi from "shared/services/papi.service";

import { useState } from "react";
import { SomeDataProvider } from "extension-types";

const {
  react: {
    hooks: { useData, useDataProvider },
    components: { Button },
  },
  logger,
} = papi;

globalThis.webViewComponent = function() {
  const [clicks, setClicks] = useState(0);

  const someDataProvider = useDataProvider<SomeDataProvider>(
    "crowd-bible.test-data-engine"
  );

  const someData = useData(someDataProvider);

  return (
    <>
      <div className="title">
        Extension Template <span className="framework">React</span> - testing for crowd.Bible
      </div>
      <div>{someData}</div>
      <div>
        <Button
          onClick={async () => {
            const result = await papi.commands.sendCommand(
              'extension-template.do-stuff',
              'Extension Template React Component',
            );
            logger.info(
              `command:extension-template.do-stuff, result: '${result}'`,
            );
          }}
        >
          send command  'extension-template.do-stuff'
        </Button>
      </div>
    </>
  );
}
