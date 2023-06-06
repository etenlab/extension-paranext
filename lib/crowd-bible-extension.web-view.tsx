import papi from 'papi';
// import papi from "shared/services/papi.service";
import App from './src/App';

globalThis.webViewComponent = function () {
  return (
    <>
      <App />
    </>
  );
};
