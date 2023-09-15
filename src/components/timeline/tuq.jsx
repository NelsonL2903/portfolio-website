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
                primary="Designed and developed applications based on client specifications, employing Ruby on Rails and Sorbet for backend development, in conjunction with Angular, TypeScript, and HTML for frontend implementation."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Developed REST APIs that interact with Active Record models, implemented unit tests, and documented with Swagger API for applications, enhancing application reliability and company software quality."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon fontSize="large" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                primary="Met with clients to discuss specifications for applications, and designed Entity-Relationship Diagrams based on those specifications, ensuring alignment with client needs and project success."
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Tuq;
