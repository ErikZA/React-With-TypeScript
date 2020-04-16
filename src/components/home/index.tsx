import React from 'react';

import BudgetForm from './budget';
import SpotlightPage from './spotlight';

const HomePage: React.FC = () => {
    return(
        <>
            <BudgetForm/>
            <SpotlightPage/>
        </>
        )
}

export default HomePage;