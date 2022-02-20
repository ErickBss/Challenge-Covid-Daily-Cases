import { useQuery } from "react-query";
import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { PreferencesContext } from "../context";
import ReactTooltip from "react-tooltip";

import { Container, VariantSelector } from "./style";

import MapChart from "./mapChart";

export default function MapContainer() {
  const [content, setContent] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [availableVariants, setAvailableVariants] = useState([]);
  const [variants, setVariants] = useState([]);

  const { preferences } = useContext(PreferencesContext);

  let array = [];

  // Get the API information, DATES

  useQuery("mainApiInformation", async () => {
    const response = await axios.get(
      `http://localhost:3001/cases/${
        preferences.datesValues == undefined
          ? "2021-03-08"
          : preferences.datesValues
      }/${preferences.cases == undefined ? "count" : preferences.cases}`
    );
    console.log("passed");
    response.data.forEach((e) => {
      array = [...array, e];
    });

    getVariantValues();

    return setApiData(array);
  });

  let isolateVariantName = [];

  function getVariantValues() {
    console.log("useEffectPassed");
    let filterEachVariant = apiData.filter(filterVariantValues);

    filterEachVariant.forEach((e) => {
      isolateVariantName = [...isolateVariantName, e.variant];
      setAvailableVariants(isolateVariantName);
    });
  }

  function filterVariantValues(e) {
    return e.location == "Angola";
  }

  function handleVariantsValues(variantSelected) {
    console.log(variantSelected);
    let array = [];
    const filterVariants = apiData.filter((e) => {
      return e.variant == variantSelected;
    });
    filterVariants.forEach((e) => {
      array = [...array, e];
      setVariants(array);
    });
  }

  return (
    <Container>
      <VariantSelector>
        <select
          onChange={(e) => {
            console.log(e.target.value);
            handleVariantsValues(e.target.value);
          }}
        >
          <option selected disabled>
            Select The Variant
          </option>
          {availableVariants.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </VariantSelector>
      <MapChart
        setTooltipContent={setContent}
        apiData={apiData}
        variants={variants}
      />
      <ReactTooltip>{content}</ReactTooltip>
    </Container>
  );
}
