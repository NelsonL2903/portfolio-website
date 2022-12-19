import { Grid, Slide, Typography } from "@mui/material";
import ceciLogo from "../../assets/ceci-logo.png";

export const Grade12 = () => {
  return (
    <Slide direction="right" in>
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        xs
        margin="30px"
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          xs
        >
          <img src={ceciLogo} alt="logo" style={{ height: "30vmin" }}></img>
          <Typography
            variant="h5"
            style={{ color: "white", marginTop: "25px" }}
          >
            Central Elgin Collegiate Institute
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "15px" }}
          >
            Grade 12 Student
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "15px" }}
          >
            Febuary 2021 - June 2021
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          xs
        >
          <Typography variant="h5" style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pretium posuere nibh, in scelerisque sapien suscipit a. Mauris non
            hendrerit ligula. Phasellus ut lectus sit amet nunc volutpat
            pharetra. Praesent molestie viverra elit at volutpat. Fusce elit
            nibh, scelerisque sit amet dapibus sit amet, vehicula sed justo.
            Etiam sed tristique lectus, nec sagittis enim. Nulla iaculis, leo
            sit amet egestas molestie, ipsum enim varius erat, quis porttitor mi
            erat vitae odio. Donec et nunc sem. Nullam sit amet eros id ex
            rutrum vehicula. Phasellus sed venenatis dui. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </Typography>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Grade12;
