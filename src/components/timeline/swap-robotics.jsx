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
                primary="Utilized Python, ROS, and Foxglove to develop code for real-time data tracking, reporting, and visualization of autonomous robots."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Applied object-oriented principles to optimize class efficiency and code architecture."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Collaborated closely with management to prioritize project needs, resolve conflicts, and define clear ticket criteria."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Contributed effectively within a Scrum framework, actively engaging in bi-daily standup meetings and sprint-focused development cycles, and effectively utilized ClickUp for ticket management and organization."
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default SwapRobotics;
