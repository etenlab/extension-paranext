import React from 'react';
import { AppContextProvider } from './AppContext';
import { ButtonWithContext } from './components/buttonWithContext';
import { AlertWithContext } from './components/alertWithContext';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { IonReactRouter } from '@ionic/react-router';
import { PageLayout } from '@/components/PageLayout';
import { AppRoutes } from '@/routes/AppRoutes';

// import { ThemeProvider } from '@eten-lab/ui-kit'; // It doesn't work.
import { ThemeProvider } from './local-ui-kit/ThemeProvider'; // It works!

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
            <ThemeProvider autoDetectPrefersDarkMode={false}>
              {/* <IonReactRouter> */}
              {/* <PageLayout> */}
              {/* <IonRouterOutlet id="crowd-bible-router-outlet"> */}
              <AlertWithContext></AlertWithContext>
              <ButtonWithContext></ButtonWithContext>
              {/* </IonRouterOutlet> */}
              {/* </PageLayout> */}
              {/* </IonReactRouter> */}
            </ThemeProvider>
          </AppContextProvider>
        </IonApp>
      </ApolloProvider>
    </React.StrictMode>
  );
}
