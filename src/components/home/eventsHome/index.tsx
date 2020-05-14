import React from "react";

import BudgetForm from "./budget";
import SpotlightPage from "./spotlight";

const EventsHomePage: React.FC = () => {
  return (
    <>
      <BudgetForm />
      <SpotlightPage />
    </>
  );
};

export default EventsHomePage;
