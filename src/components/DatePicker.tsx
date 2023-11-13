import { format } from "date-fns";
import React, { useState } from "react";

interface DateProps {
  titulo?: string;
  classname?: string; 
  classname2?: string; 
  setData?: (data: Date) => void;
  dataMin?: Date
  dataMax?: Date
}

export default function DatePicker(props: DateProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(e.target.value);

    if (props.setData) {
      props.setData(newDate);
    }
  };

  return (
    <div className={`pb-5 ${props.classname} text-black`}>
      <label className="font-Montserrat" htmlFor="data">{props.titulo}</label><br />

      <input
        type="date"
        id="date"
        name="calendario"
        value={selectedDate}
        min={props.dataMin? format(props.dataMin, 'yyyy-MM-dd') : "1950-01-01"}
        max={props.dataMax? format(props.dataMax, 'yyyy-MM-dd') : "2100-12-31"}
        className={`bg-gray-200 rounded-md p-1 px-2 ${props.classname2}`}
        onChange={handleDateChange}
      />
    </div>
  );
}
