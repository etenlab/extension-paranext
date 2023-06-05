import { Alert } from '@eten-lab/ui-kit';
import { useAppContext } from '../hooks/useAppContext';

export function AlertWithContext() {
  const {
    states: {
      global: { snack },
    },
  } = useAppContext();
  return <Alert>from context snack: {snack.message}</Alert>;
}
