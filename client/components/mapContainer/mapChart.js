import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent, apiData, variants }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  let array = [];
                  const Data = variants.forEach((data) => {
                    if (data.location === geo.properties.NAME) {
                      array = data;
                      console.log("mapData:", array);
                    }
                    setTooltipContent(
                      `Name: ${array.location } // 
                      Variant: ${array.variant} // 
                      Cases: ${
                        array.num_sequences == undefined
                          ? array.num_sequences_total
                          : array.num_sequences
                      } //  
                      Percentage: ${array.perc_sequences} // `
                      
                    );
                  });
                  //   const { NAME, POP_EST } = geo.properties;
                  //   setTooltipContent(`${NAME} — ${POP_EST}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default MapChart;
