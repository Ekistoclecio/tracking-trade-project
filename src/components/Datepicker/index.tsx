import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import Style from "./index.module.scss";
import { CustomDatePickerProps } from "../../interfaces/interfaces";
import { months } from "../../utils/constants/constants";

export default function CustomDatePicker({
  date,
  setDate,
}: CustomDatePickerProps) {
  const [hoveredInputYear, setHoveredInputYear] = useState(false);
  //@ts-ignore
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    //@ts-ignore
    <button className="btn btn-primary w-100" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <>
      <DatePicker
        selected={date}
        //@ts-ignore
        onChange={(date) => setDate(date)}
        customInput={<CustomInput />}
        dateFormat="yyyy-MM-dd"
        formatWeekDay={(nameOfDay) => nameOfDay.toString().substr(0, 3)}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          decreaseYear,
          increaseYear,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="d-flex bg-primary justify-content-between mx-1">
            <button
              className="border-0 bg-primary text-white"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {"<"}
            </button>
            <div className="d-flex">
              <select
                className="form-control bg-primary text-white border-0 fs-5"
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
                style={{ width: "140px" }}
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span
                className="d-flex align-items-center"
                id="inputYear"
                onMouseEnter={() => setHoveredInputYear(true)}
                onMouseLeave={() => setHoveredInputYear(false)}
                style={{ width: "60px" }}
              >
                <input
                  type="number"
                  id="inputYear"
                  className="form-control border-0 p-0 bg-primary text-white fs-5"
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) =>
                    changeYear(parseInt(value))
                  }
                  style={{ maxWidth: "45px" }}
                />
                <span
                  className={`d-flex flex-column text-white ${
                    hoveredInputYear ? "d-block" : "d-none"
                  }`}
                  id="inputArrows"
                  style={{ maxHeight: "20px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-caret-up-fill ${Style.arrowUp}`}
                    viewBox="0 0 16 16"
                    onClick={increaseYear}
                  >
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-caret-down-fill ${Style.arrowDown}`}
                    viewBox="0 0 16 16"
                    onClick={decreaseYear}
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </span>
              </span>
            </div>

            <button
              className="border-0 bg-primary text-white"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {">"}
            </button>
          </div>
        )}
      />
    </>
  );
}
