import {
  Grid,
  Slide,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import swapLogo from "../../assets/swap-logo.png";

export const SwapRoboticsTwo = () => {
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
          <img src={swapLogo} alt="logo" style={{ height: "30vmin" }}></img>
          <Typography
            variant="h5"
            style={{ color: "white", marginTop: "25px" }}
          >
            Swap Robotics
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "15px" }}
          >
            Web Developer Co-op
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "15px" }}
          >
            May 2023 - August 2023
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
          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Used JavaScript, HTML, CSS, and Material-UI to implement 15+ user-requested features to a Dockerized React application, such as monitoring critical robot systems and implementing fail-safe protocols to prevent autonomous operations in case of system failures."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Integrated Google Maps APIs to simultaneously track and visualize the real time locations of 20+ robots."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Developed robust REST APIs to interact with AWS S3 Buckets as well as PostgreSQL database through the Prisma ORM."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Implemented Jest unit tests for REST APIs and established GitHub Actions for automated testing on an AWS EC2 Instance, increasing code coverage by 70%."
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default SwapRoboticsTwo;
