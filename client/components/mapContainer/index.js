import { useQuery } from "react-query";
import axios from "axios";

import { useContext, useState } from "react";
import { PreferencesContext } from "../context";
import ReactTooltip from "react-tooltip";

import { Container } from "./style";

import MapChart from "./MapChart";

export default function MapContainer() {
  const [content, setContent] = useState([]);
  const [apiData, setApiData] = useState([]);

  const { preferences } = useContext(PreferencesContext);

  let array = [];

  // Get the API information, DATES

  useQuery("mainApiInformation", async () => {
    const response = await axios.get(
      `http://localhost:3001/cases/${preferences.datesValues}/${preferences.cases}`
    );
    console.log("passed");
    response.data.forEach((e) => {
      array = [...array, e];
    });
    return setApiData(array);
  });

  console.log("teste:", content);
  return (
    <Container>
      <MapChart setTooltipContent={setContent} apiData={apiData} />
      <ReactTooltip>{content}</ReactTooltip>
    </Container>
  );
}
