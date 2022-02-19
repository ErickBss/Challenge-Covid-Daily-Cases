import { useContext, useState } from "react";
import {
  ConfirmButton,
  InputRange,
  OptionsContainer,
  VisualDateValue,
} from "./style";

import { PreferencesContext } from "../context";

export default function SelectorLine({ dates, cases }) {
  const [datesValues, setDatesValues] = useState("2021-03-22");

  const { preferences, setPreferences } = useContext(PreferencesContext);

  function handleDatesValues(value) {
    if (value <= 10) {
      return setDatesValues(dates[0].date);
    }
    if (value <= 20) {
      return setDatesValues(dates[1].date);
    }
    if (value <= 30) {
      return setDatesValues(dates[2].date);
    }
    if (value <= 40) {
      return setDatesValues(dates[3].date);
    }
    if (value <= 50) {
      return setDatesValues(dates[4].date);
    }
    if (value <= 60) {
      return setDatesValues(dates[5].date);
    }
    if (value <= 70) {
      return setDatesValues(dates[6].date);
    }
    if (value <= 80) {
      return setDatesValues(dates[7].date);
    }
    if (value <= 90) {
      return setDatesValues(dates[8].date);
    }
    if (value <= 100) {
      return setDatesValues(dates[9].date);
    }
  }

  function handleDataPreferences() {
    setPreferences({ datesValues, cases });
  }

  return (
    <>
      <OptionsContainer>
        <VisualDateValue>
          <h2>{datesValues}</h2>
        </VisualDateValue>
        <ConfirmButton
          onClick={() => {
            handleDataPreferences();
          }}
        />
      </OptionsContainer>
      <InputRange
        onChange={(e) => {
          handleDatesValues(e.target.value);
        }}
        type="range"
        min="0"
        max="100"
        id="dateValue"
        name="dateValue"
      />
    </>
  );
}
