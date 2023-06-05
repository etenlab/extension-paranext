import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Button } from "@eten-lab/ui-kit";
import { IonApp, setupIonicReact } from "@ionic/react";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { createUploadLink } from 'apollo-upload-client';
import { AppContextProvider } from "./AppContext";

/** doesn't work */
setupIonicReact();

/** doesn't work*/
// const uploadLink = createUploadLink({
//   uri: `${process.env.REACT_APP_CPG_SERVER_URL}/graphql`,
// });
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: uploadLink,
// });

export default function App() {
  const [value, setValue] = useState('')

  
  return (
    <React.StrictMode>
      {/* <ApolloProvider client={client}> */}
      
      {/* <IonApp> */}
        {/* <AppContextProvider> */}

          <TextField
            variant="outlined"
            value={value}
            onChange={(e) => {setValue(e.target.value)}}
            // color={'red'}  // doesn't work
          />
          <Button
            onClick={() => {setValue('clicked')}}
          >
            test button
          </Button>
        {/* </AppContextProvider> */}
        {/* </IonApp> */}
      {/* </ApolloProvider> */}
        
    </React.StrictMode>    
  );
}
