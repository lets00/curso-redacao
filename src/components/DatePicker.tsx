import React, {useState} from "react"

interface DateProps {
    titulo?: string
    classname?: string
}

export default function DatePicker(props: DateProps) {
    const [selectedDate, setSelectedDate] = useState<string>("");

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };

    return(
        <div className={`pb-5 ${props.classname} text-black`}>
            <label className="font-Montserrant" htmlFor="data">{props.titulo}</label><br />
    
            <input type="date" id="date" name="calendario"
            value={selectedDate} min="1950-01-01" max="2100-12-31"
            className="bg-gray-200 rounded-md p-1 px-2"
            onChange={handleDateChange}/>
        </div>

    )
}