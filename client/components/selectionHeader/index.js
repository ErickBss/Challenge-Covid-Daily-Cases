import { useQuery } from "react-query";
import axios from "axios";

import { useContext, useState } from "react";

import {
  Container,
  OptionsBox,
  Options,
  TimeLine,
  TimeLineOption,
  Date,
} from "./style";
import SelectorLine from "../selectLine";
import { PreferencesContext } from "../context";

export default function SelectionBox() {
  const [date, setDates] = useState([]);
  const [cases, setCases] = useState("count");

  let array = [];

  // Get the API information, DATES

  useQuery("dates", async () => {
    const response = await axios.get("http://localhost:3001/dates");
    response.data.forEach((e) => {
      array = [...array, e];
    });

    return setDates(array);
  });

  return (
    <Container>
      <OptionsBox>
        <h1>Covid Daily Cases</h1>
        <Options>
          <select
            onChange={(e) => {
              setCases(e.target.value);
            }}
          >
            <option selected disabled>
              Select The Kind Of Cases
            </option>
            <option value="count">Daily Cases</option>
            <option value="cumulative">Total Cases</option>
          </select>
          <SelectorLine dates={date} cases={cases} />
          <TimeLine>
            {date.map((date) => {
              return (
                <TimeLineOption>
                  <Date for="dateValue">{date.date.replace(/[-]/g, "/")}</Date>
                </TimeLineOption>
              );
            })}
          </TimeLine>
        </Options>
      </OptionsBox>
    </Container>
  );
}
