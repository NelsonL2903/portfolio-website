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

export const Experience = (jobInfo) => {
  const job = jobInfo.jobInfo;

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
          <img src={job.logo} alt="logo" style={{ height: "30vmin" }}></img>
          <Typography
            variant="h5"
            style={{ color: "white", marginTop: "25px" }}
          >
            {job.name}
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "15px" }}
          >
            {job.title}
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "15px" }}
          >
            {job.start} - {job.end}
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
            {job.achievements.map((achievement) => (
              <ListItem key={achievement}>
                <ListItemIcon>
                  <ArrowForwardIcon
                    fontSize="large"
                    style={{ color: "white" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "20px", color: "white" }}
                  primary={achievement}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Experience;
