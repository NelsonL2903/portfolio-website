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
import tuqLogo from "../../assets/tuq-logo.png";

export const Tuq = () => {
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
          <img src={tuqLogo} alt="logo" style={{ height: "30vmin" }}></img>
          <Typography
            variant="h5"
            style={{ color: "white", marginTop: "25px" }}
          >
            Tuq Inc.
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "15px" }}
          >
            Junior Developer
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "15px" }}
          >
            January 2022 - April 2022
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
                primary="Used Ruby on Rails, along with Angular, TypeScript, and HTML to develop an application."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Created REST APIs for applications and tested them using Postman."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Implemented unit tests and Swagger API documentation."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Implemented Sorbet for a Ruby on Rails application."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Used Active Record to set up models and tables for a database."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Met with clients to discuss specifications for applications, and designed ERDs based on those specifications."
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Tuq;
