import React from 'react';

import BudgetForm from './budget';
import SpotlightPage from './spotlight';

const HomePage: React.FC = () => {
    return(
        <div>
            <BudgetForm/>
            <SpotlightPage/>
        </div>
        )
}

export default HomePage;