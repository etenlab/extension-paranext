import type IDataProvider from "shared/models/data-provider.interface";

export interface SomeDataProvider
  extends IDataProvider<string, string, string> {
  // no need in additional methds yet
  // setHeresy(verseRef: string, verseText: string): Promise<boolean>;
}
