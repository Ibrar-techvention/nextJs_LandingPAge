import { Grid, Typography } from "@mui/material";
import Section from "./Section";
import ListItems from "./List";

import {
  Boxes,
  Grids,
  Headings,
  label,
  MainBox,
  Papers,
  Paperss,
  Paragraph,
  Switches,
} from "./style";
import { priceData } from "./data";
import { useState } from "react";

const PricingPlan = () => {
  const [year, setYear] = useState(false)
  const handleChange = (e: any) => {
    setYear(!year)
    
  };

  return (
    <MainBox>
      <Headings>Our Price Plan</Headings>
      <Paragraph textAlign="center">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Ut nec turpis tristique, egestas lacus at, cursus arcu
      </Paragraph>
      <Boxes>
        <Typography>monthly</Typography>
        <Switches {...label} onChange={handleChange} />
        <Typography>Annually</Typography>
      </Boxes>
      <Grids container rowSpacing={2} columnSpacing={5} justifyContent="center">
        {priceData.map((val, index) => (
          <>
            {index % 2 !== 0 ? (
              <Grid item lg={4} md={4} sm={8} xs={12}>
                <Paperss>
                  <Section val={val} index={index} key={index} year={year} />

                  <ListItems val={val} index={index} key={index}  />
                </Paperss>
              </Grid>
            ) : (
              <Grid item lg={4} md={4} sm={8} xs={12}>
                <Papers>
                  <Section val={val} index={index} key={index} year={year}/>

                  <ListItems val={val} index={index} key={index} />
                </Papers>
              </Grid>
            )}
          </>
        ))}
      </Grids>
    </MainBox>
  );
};

export default PricingPlan;
