import { Grid, Typography } from "@mui/material";
import Portrait from "../../assets/portrait.jpg";
import Itch from "../../assets/itchio.jpg";

export const Profile = () => {
  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      xs
      height="100%"
    >
      <img
        src={Portrait}
        alt="portrait"
        style={{ width: "18em", height: "18em" }}
      ></img>
      <Typography variant="h3" color="common.white">
        Nelson Loop
      </Typography>
      <Typography variant="h4" color="common.white">
        Computer Engineering
      </Typography>
      <Typography variant="h5" color="common.white" marginTop="5px">
        University of Waterloo
      </Typography>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs
        height="100%"
        marginTop="10px"
      >
        <Typography variant="h6" color="common.white" marginRight="8px">
          Links:
        </Typography>
        <a
          href="https://www.linkedin.com/in/nelsonloop/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "3px" }}
        >
          <img
            src="https://skillicons.dev/icons?i=linkedin"
            className="logo"
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/NelsonL2903"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "3px" }}
        >
          <img
            src="https://skillicons.dev/icons?i=github"
            className="logo"
            alt="github"
          />
        </a>
        <a
          href="https://nelsonl2903.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "3px" }}
        >
          <img
            src={Itch}
            className="logo"
            alt="itch"
            style={{ width: "47px", height: "47px", borderRadius: "9px" }}
          />
        </a>
      </Grid>
    </Grid>
  );
};

export default Profile;
