import * as React from 'react';
import GlobalProvider from './src/contexts/Provider';
import AppNavContainer from './src/navigations';

export default function App() {

  return (

    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>

  );

}