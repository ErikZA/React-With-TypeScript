import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar,  DayValue, utils } from "react-modern-calendar-datepicker";

const BudgetForm: React.FC = () => {

const [day, setDay] = useState<DayValue>( null);

  return (
        <Calendar value={day} 
        onChange={setDay} 
        shouldHighlightWeekends
        minimumDate={utils('en').getToday()}
        />
  );
};

export default BudgetForm;
