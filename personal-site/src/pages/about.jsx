import { Box, Grid, Typography } from "@mui/material";
import Portrait from "../assets/portrait.jpg";

export const AboutPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xs
        height="100%"
      >
        {/* <img src={Portrait} alt="portrait"></img> */}
        <Typography variant="h2" color="common.white">
          Nelson Loop
        </Typography>
        <Typography variant="h3" color="common.white">
          Computer Engineering
        </Typography>
        <Typography variant="h4" color="common.white">
          University of Waterloo
        </Typography>
      </Grid>
    </Box>
  );
};

export default AboutPage;
