import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Button } from "@eten-lab/ui-kit";
import { IonApp, setupIonicReact } from "@ionic/react";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { createUploadLink } from 'apollo-upload-client';

setupIonicReact();

const uploadLink = createUploadLink({
  uri: `${process.env.REACT_APP_CPG_SERVER_URL}/graphql`,
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink,
});

export default function App() {
  const [value, setValue] = useState('')

  
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
      
      <IonApp>
        <TextField
          variant="outlined"
          value={value}
          onChange={(e) => {setValue(e.target.value)}}
          // Not sure why this still doesn't work. It may be some mui styles incompatibility.
          // You may want to do some googling to investigate. Others seemed to have the issue as well
          // https://stackoverflow.com/questions/72046433/cannot-read-property-main-of-undefined-in-mui-v5
          // color={'red'}  // doesn't work
        />
        <Button
          onClick={() => {setValue('clicked')}}
        >
          test button
        </Button>
      </IonApp>
      </ApolloProvider>
        
    </React.StrictMode>    
  );
}
