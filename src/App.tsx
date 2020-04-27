import React from 'react';
import { StoreDataProvider } from './provider';
import Main from './components/main';
const App = () => {
    return (
        <StoreDataProvider>
            <Main />
        </StoreDataProvider>
    );
};

export default App;
