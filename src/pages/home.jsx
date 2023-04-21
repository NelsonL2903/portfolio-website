import { Box, Tabs, Tab, AppBar } from "@mui/material";
import { useState } from "react";
import TimelinePage from "./timeline";
import Resume from "../assets/PortfolioResume.pdf";
import AboutPage from "./about";

export const HomePage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        width: "100%",
        height: "99.9vh",
        borderBottom: 1,
        borderColor: "divider",
        // overflow: "hidden",
      }}
    >
      <Box sx={{ bgcolor: "background.paper" }} fullWidth>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            aria-label="tabs"
          >
            <Tab label="About Me" />
            <Tab label="Co-op Experience" />
            <Tab label="Resume" />
          </Tabs>
        </AppBar>
      </Box>
      {value === 0 && <AboutPage></AboutPage>}
      {value === 1 && <TimelinePage></TimelinePage>}
      {value === 2 && (
        <iframe
          title="Resume"
          className="resume"
          src={Resume}
          width="100%"
          height="100%"
        />
      )}
    </Box>
  );
};

export default HomePage;
