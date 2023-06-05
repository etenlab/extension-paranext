import { Button } from '@eten-lab/ui-kit';
import { useAppContext } from '../hooks/useAppContext';
import { TextField } from '@mui/material';
import { useState } from 'react';

export function ButtonWithContext() {
  const {
    actions: { alertFeedback },
  } = useAppContext();
  const [value, setValue] = useState('');

  return (
    <>
      <TextField // direct import from MUI - OK
        variant="outlined"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        // color={''}
        sx={{
          backgroundColor: 'red',
          color: 'green',
        }}
      />
      <Button // import from ui-kit - OK
        onClick={() => {
          alertFeedback('info', value);
        }}
      >
        test button
      </Button>
    </>
  );
}
