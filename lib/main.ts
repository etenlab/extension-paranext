import papi from "papi";
import IDataProviderEngine from "shared/models/data-provider-engine.model";
// @ts-expect-error ts(1192) this file has no default export; the text is exported by rollup
import extensionTemplateReact from "./extension-template.web-view";
import extensionTemplateReactStyles from "./extension-template.web-view.scss?inline";

const { logger } = papi;
console.log(import.meta.env.PROD);
logger.info("Extension template is importing!");

const unsubscribers = [];

class SomeDataProviderEngine
  implements IDataProviderEngine<string, string | undefined, string | undefined>
{
  private data: { [key: string]: string } = {}

  // Note: this method does not have to be provided here for it to work properly because it is layered over on the papi.
  // But because we provide it here, we must return `true` to notify like in the set method.
  // The contents of this method run before the update is emitted.
  notifyUpdate() {
    logger.info(
      `called notifyUpdate()`
    );
    return true;
  }

  async set(key: string, data: string): Promise<boolean> {
    if (!key || !data) return false;
    this.data[key] = data
    return true;
  }

  get = async (key: string): Promise<string> => {
    // Need to figure out how to properly use papi interfaces
    // 
    // const verseResponse = await papi.fetch(
    //   `https://bible-api.com/${encodeURIComponent(
    //     this.#getSelector(selector)
    //   )}`
    // );

    // this.data[key] = `got from nowhere at ${new Date().toISOString()}`;
    this.notifyUpdate();


    return this.data[key];
  };

}

export async function activate() {
  logger.info("Extension template is activating! iiii");

  const someDataProviderPromise = papi.dataProvider.registerEngine(
    "paranext-extension-template.quick-verse",
    new SomeDataProviderEngine()
  );

  const unsubPromises = [
    papi.commands.registerCommand(
      "extension-template.do-stuff",
      (message: string) => {
        return `The template did stuff! ${message}`;
      }
    ),
  ];

  papi.webViews.addWebView({
    id: 'Extension template WebView React',
    content: extensionTemplateReact,
    styles: extensionTemplateReactStyles,
  });


  const unsumbs = await Promise.all(unsubPromises.concat([someDataProviderPromise]))
  return papi.util.aggregateUnsubscriberAsyncs(unsumbs)


}

export async function deactivate() {
  logger.info("Extension template is deactivating!");
}
