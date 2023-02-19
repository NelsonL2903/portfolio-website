import { Grid, Typography } from "@mui/material";

export const Skills = () => {
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
      <Typography variant="h5" color="common.white">
        Technical Skills:
      </Typography>
      <Typography variant="h6" color="common.white" marginTop="10px">
        Frontend:
      </Typography>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="10px"
        xs
      >
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"
          alt="JavaScript"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          alt="TypeScript"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
          alt="HTML"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
          alt="CSS"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
          alt="MUI"
          style={{ margin: "3px" }}
        ></img>
      </Grid>
      <Typography variant="h6" color="common.white" marginTop="10px">
        Backend:
      </Typography>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="10px"
        xs
      >
        <img
          src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
          alt="Java"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white"
          alt="Ruby"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
          alt="Cpp"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"
          alt="Csharp"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
          alt="C"
          style={{ margin: "3px" }}
        ></img>
      </Grid>
      <Typography variant="h6" color="common.white" marginTop="10px">
        Frameworks:
      </Typography>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="10px"
        xs
      >
        <img
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          alt="React"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white"
          alt="RubyOnRails"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"
          alt="Angular"
          style={{ margin: "3px" }}
        ></img>
      </Grid>
      <Typography variant="h6" color="common.white" marginTop="10px">
        Cloud:
      </Typography>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="10px"
        xs
      >
        <img
          src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
          alt="AWS"
          style={{ margin: "3px" }}
        ></img>
      </Grid>
      <Typography variant="h6" color="common.white" marginTop="10px">
        Environments:
      </Typography>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="10px"
        xs
      >
        <img
          src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"
          alt="Windows"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"
          alt="Ubuntu"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
          alt="VSCode"
          style={{ margin: "3px" }}
        ></img>
        <img
          src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white"
          alt="Eclipse"
          style={{ margin: "3px" }}
        ></img>
      </Grid>
      <Typography variant="h6" color="common.white" marginTop="10px">
        Other:
      </Typography>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginTop="10px"
        xs
      >
        <img
          src="https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white"
          alt="Unity"
          style={{ margin: "3px" }}
        ></img>
      </Grid>
    </Grid>
  );
};

export default Skills;
