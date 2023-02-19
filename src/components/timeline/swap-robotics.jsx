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

export const SwapRobotics = () => {
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
            Autonomous Robotics Software Development Co-op
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "15px" }}
          >
            September 2022 - December 2022
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
                primary="Used JavaScript, HTML, CSS, and the MUI library to improve and add
            to a dockerized React application."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Created REST APIs interacting with AWS S3 Buckets as well as Prisma
                with a PostgreSQL database."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Worked with and integrated the Google Maps JavaScript APIs into the
                React application."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Used Jest to create unit tests for REST APIs."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Set up GitHub Actions to SSH into an AWS EC2 Instance and run various commands within the
                instance."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Experience in Scrum development processes, along with ClickUp for
                tickets and organization."
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default SwapRobotics;
