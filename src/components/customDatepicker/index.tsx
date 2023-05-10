import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomDatePickerProps } from "../../interfaces/interfaces";
import { months } from "../../utils/constants/constants";
import { Box, Flex, Select, Input, Icon } from "@chakra-ui/react";

export default function Datepicker({ date, setDate }: CustomDatePickerProps) {
  const [hoveredInputYear, setHoveredInputYear] = useState(false);
  //@ts-ignore
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Box
      textAlign={"center"}
      borderRadius={5}
      bg={"#0078FF"}
      _hover={{ background: "#0063D1" }}
      cursor={"pointer"}
      onClick={onClick}
      color={"white"}
      fontSize={15}
      py={"8.75px"}
      //@ts-ignore
      ref={ref}
      id="teste"
    >
      {value}
    </Box>
  ));

  return (
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
        <Flex justifyContent={"space-between"} mx={1} color={"white"}>
          <Box
            as="button"
            border={0}
            bg={"transparent"}
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            fontSize={16}
            pl={1}
          >
            {"<"}
          </Box>
          <Flex>
            <Select
              p={1}
              border={0}
              w={"130px"}
              value={months[date.getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
              cursor={"pointer"}
            >
              {months.map((option) => (
                <Box
                  color={"black"}
                  as="option"
                  key={option}
                  value={option}
                  cursor={"pointer"}
                >
                  {option}
                </Box>
              ))}
            </Select>
            <Input
              mt={1}
              p={0}
              px={1}
              border={0}
              maxW={"50px"}
              type="number"
              id="inputYear"
              value={date.getFullYear()}
              onChange={({ target: { value } }) => changeYear(parseInt(value))}
            ></Input>
            <Flex flexDir={"column"} pt={2}>
              <Icon
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                fill="currentColor"
                viewBox="0 0 16 16"
                onClick={increaseYear}
                _hover={{ background: "#0063D1" }}
                cursor={"pointer"}
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </Icon>
              <Icon
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                fill="currentColor"
                viewBox="0 0 16 16"
                onClick={decreaseYear}
                _hover={{ background: "#0063D1" }}
                cursor={"pointer"}
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </Icon>
            </Flex>
          </Flex>
          <Box
            as="button"
            border={0}
            bg={"transparent"}
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            fontSize={16}
            pr={1}
          >
            {">"}
          </Box>
        </Flex>
      )}
    />
  );
}
