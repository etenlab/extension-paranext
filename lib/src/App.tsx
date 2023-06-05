import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { AppContextProvider } from './AppContext';
import { ButtonWithContext } from './components/buttonWithContext';
import { useAppContext } from './hooks/useAppContext';

/** doesn't work */
// setupIonicReact();

/** doesn't work*/
// const uploadLink = createUploadLink({
//   uri: `${process.env.REACT_APP_CPG_SERVER_URL}/graphql`,
// });
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: uploadLink,
// });

export default function App() {
  const [value, setValue] = useState('');
  const {
    states: {
      global: { snack },
    },
  } = useAppContext();

  return (
    <React.StrictMode>
      {/* <ApolloProvider client={client}> */}

      {/* <IonApp> */}
      <AppContextProvider>
        <TextField // direct import from MUI
          variant="outlined"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          // color={'red'}  // doesn't work
        />
        <ButtonWithContext setValue={setValue}></ButtonWithContext>
        {/* </IonApp> */}
      </AppContextProvider>
      {/* </ApolloProvider> */}
    </React.StrictMode>
  );
}
