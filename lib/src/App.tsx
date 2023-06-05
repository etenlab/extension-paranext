import React, { useState } from 'react';
import { AppContextProvider } from './AppContext';
import { ButtonWithContext } from './components/buttonWithContext';
import { AlertWithContext } from './components/alertWithContext';

setupIonicReact();

const uploadLink = createUploadLink({
  uri: `${process.env.REACT_APP_CPG_SERVER_URL}/graphql`,
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink,
});

export default function App() {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>

      <IonApp>
      <AppContextProvider>
        <AlertWithContext></AlertWithContext>
        <ButtonWithContext></ButtonWithContext>
      </AppContextProvider>
      </IonApp>
      </ApolloProvider>
    </React.StrictMode>
  );
}
