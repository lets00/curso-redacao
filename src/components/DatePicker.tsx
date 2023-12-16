import { format } from "date-fns";
import React, { useEffect, useState } from "react";

interface DateProps {
  titulo?: string;
  classname?: string; 
  classname2?: string; 
  setData?: (data: Date) => void;
  dataMin?: Date
  dataMax?: Date
  valor?: Date
}

export default function DatePicker(props: DateProps) {
  const [selectedDate, setSelectedDate] = useState<string>(
    props.valor ? format(props.valor, 'yyyy-MM-dd') : ''
  );

  useEffect(() => {
    if (props.valor && props.valor.getTime() !== 0) {
      setSelectedDate(format(props.valor, 'yyyy-MM-dd'));
    } else {
      setSelectedDate(''); // Definir como uma string vazia quando não houver valor
    }
  }, [props.valor]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDateString = e.target.value;

    if (selectedDateString) {
      const selectedDateObj = new Date(selectedDateString + 'T00:00:00Z');

      if (!isNaN(selectedDateObj.getTime())) {
        setSelectedDate(selectedDateString);

        if (props.setData) {
          const newDate = new Date(selectedDateObj);
          newDate.setDate(newDate.getDate() + 1);
          props.setData(newDate);
        }
      }
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
        min={props.dataMin ? format(props.dataMin, 'yyyy-MM-dd') : '1950-01-01'}
        max={props.dataMax ? format(props.dataMax, 'yyyy-MM-dd') : '2100-12-31'}
        className={`bg-gray-200 rounded-md p-1 px-2 ${props.classname2}`}
        onChange={handleDateChange}
      />
    </div>
  );
}

